import "./App.css";
import React, { useState, useEffect } from "react";
import RootContext from "./context";
import GlobalStyle from "./styles/GlobalStyles";
import unsplashData from "./data.json";
import { apiKey } from "./apiKey/index";
import axios from "axios";
import Router from "./routing/Router";
import { Redirect } from "react-router-dom";

const App = () => {
  const [photosList, setPhotosList] = useState([]);
  const [isPopperVisible, setIsPopperVisible] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [keyWordsArray, setKeyWordArray] = useState([]);
  const [showSearchValue, setshowSearchValue] = useState("");
  const [goToGalleryPage, setGoToGalleryPage] = useState(false);
  const [suggestionsArray, setSuggestionsArray] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [singlePhoto, setSinglePhoto] = useState({
    urls: "",
    alt_description: "",
    user: { name: "", location: "", profile_image: { small: "" } },
  });
  const keywordsData = unsplashData.map((item) => {
    return item.keyword;
  });

  const keywordsDataWithoutDuplicates = [...new Set(keywordsData)];

  const getPhotosFromApiBySubmitingForm = (e) => {
    e.preventDefault();
    axios
      .get(
        ` https://api.unsplash.com/search/photos?&query=${searchInputValue}&client_id=${apiKey}`
      )

      .then((res) => {
        setPhotosList(res.data.results);

        const suggestions = [
          ...new Set(
            res.data.results.flatMap((result) => {
              return result.tags.map((tag) => tag.title);
            })
          ),
        ];

        console.log(suggestions);

        setSuggestionsArray([...suggestions]);

        console.log(photosList);

        setshowSearchValue(searchInputValue);
        setIsPopperVisible(false);
        setGoToGalleryPage(true);
      });

    console.log(photosList);
  };

  const getPhotosFromApiByClickingOnSuggestionList = (word) => {
    setSearchInputValue(word);
    axios
      .get(
        ` https://api.unsplash.com/search/photos?&query=${word}&client_id=${apiKey}`
      )

      .then((res) => {
        setPhotosList(res.data.results);
        console.log(photosList);

        const suggestions = [
          ...new Set(
            res.data.results.flatMap((result) => {
              return result.tags.map((tag) => tag.title);
            })
          ),
        ];

        setSuggestionsArray([...suggestions]);

        setIsPopperVisible(false);
        setGoToGalleryPage(true);
      });
  };

  const showPopper = (e) => {
    setSearchInputValue(e.target.value);
    if (e.target.value.length < 3) {
      setIsPopperVisible(false);
    } else {
      setIsPopperVisible(true);
    }
  };
  const filterKeyWords = () => {
    if (searchInputValue.length >= 3) {
      const filteredKeyWordsData = keywordsDataWithoutDuplicates.filter(
        (word) => {
          const tempWord = word.toString().slice(0, searchInputValue.length);
          return searchInputValue.toLowerCase() === tempWord;
        }
      );
      // console.log(filteredKeyWordsData);
      setKeyWordArray(filteredKeyWordsData);
    }
  };
  useEffect(() => {
    filterKeyWords();
  }, [searchInputValue]);

  const findPhoto = (id) => {
    const findedPhoto = photosList.find((foto) => foto.id === id);
    setSinglePhoto(findedPhoto);
    console.log(singlePhoto);
  };

  ////modal
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <RootContext.Provider
        value={{
          photosList,
          isPopperVisible,
          keyWordsArray,
          searchInputValue,
          showSearchValue,
          suggestionsArray,
          modalIsOpen,
          singlePhoto,

          findPhoto,
          openModal,
          closeModal,
          getPhotosFromApiBySubmitingForm,
          getPhotosFromApiByClickingOnSuggestionList,
          showPopper,
          setshowSearchValue,
        }}
      >
        <GlobalStyle />
        <Router />
        {goToGalleryPage ? (
          <Redirect to={`/photosGallery/${showSearchValue}`} />
        ) : null}
      </RootContext.Provider>
    </div>
  );
};

export default App;
