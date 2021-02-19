import React, { useState, useEffect } from "react";
import RootContext from "./context";
import GlobalStyle from "./styles/GlobalStyles";
import unsplashData from "./data.json";
import { apiKey } from "./apiKey/index";
import axios from "axios";
import Router from "./routing/Router";
import { Redirect } from "react-router-dom";
import { searchTypes } from "./utils/searchTypes";

const App = () => {
  const keywordsData = unsplashData.map((item) => {
    return item.keyword;
  });
  const keywordsDataWithoutDuplicates = [...new Set(keywordsData)];
  const [keyWordsArray, setKeyWordArray] = useState([]);
  const [suggestionsArray, setSuggestionsArray] = useState([]);
  const [photosList, setPhotosList] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [showSearchValue, setshowSearchValue] = useState("");
  const [singlePhoto, setSinglePhoto] = useState({
    urls: "",
    alt_description: "",
    user: { name: "", location: "", profile_image: { small: "" } },
  });
  const [isPopperVisible, setIsPopperVisible] = useState(false);
  const [goToGalleryPage, setGoToGalleryPage] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [collectionsList, setCollectionList] = useState([]);
  const [usersList, setUsersList] = useState([]);

  const [activeSearchType, setActiveSearchType] = useState(searchTypes.photos);

  const handleSetActiveSearchType = (searchType) => {
    setActiveSearchType(searchType);
  };

  const handleSearchInputValueChange = (word) => {
    console.log(word);
    setSearchInputValue(word);
  };
  const getRandomPhoto = () => {
    axios
      .get(`https://api.unsplash.com/photos?&radndom&client_id=${apiKey}`)
      .then((res) => console.log("sda", res));
  };
  useEffect(() => {
    getRandomPhoto();
  }, []);

  const getPhotos = (e) => {
    console.log(searchInputValue);

    let tempWord;

    if (e.target.matches("form")) {
      tempWord = e.target.searchPhotos.value;
      e.preventDefault();
    } else {
      tempWord = e.target.innerText;
      console.log(e.target.innerText);
      setSearchInputValue(e.target.innerText);
    }
    console.log(tempWord);
    axios
      .get(
        ` https://api.unsplash.com/search/photos?&query=${tempWord}&client_id=${apiKey}`
      )

      .then((res) => {
        setPhotosList(res.data.results);
        console.log(res.data.results);

        const suggestions = [
          ...new Set(
            res.data.results.flatMap((result) => {
              return result.tags.map((tag) => tag.title);
            })
          ),
        ];
        setSuggestionsArray([...suggestions]);
        setshowSearchValue(searchInputValue);
        setIsPopperVisible(false);

        if (!e.target.matches("button")) {
          setGoToGalleryPage(true);
        }
      })
      .then(() => {
        setGoToGalleryPage(false);
      });
  };

  // const getPhotosFromApiBySubmitingForm = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get(
  //       ` https://api.unsplash.com/search/photos?&query=${searchInputValue}&client_id=${apiKey}`
  //     )

  //     .then((res) => {
  //       setPhotosList(res.data.results);
  //       console.log(res.data.results);

  //       const suggestions = [
  //         ...new Set(
  //           res.data.results.flatMap((result) => {
  //             return result.tags.map((tag) => tag.title);
  //           })
  //         ),
  //       ];
  //       setSuggestionsArray([...suggestions]);
  //       setshowSearchValue(searchInputValue);
  //       setIsPopperVisible(false);
  //       setGoToGalleryPage(true);
  //     })
  //     .then(() => {
  //       setGoToGalleryPage(false);
  //     });
  // };

  // const getPhotosFromApiByClickingOnSuggestionList = (word) => {
  //   setSearchInputValue(word);
  //   axios
  //     .get(
  //       ` https://api.unsplash.com/search/photos?&query=${word}&client_id=${apiKey}`
  //     )

  //     .then((res) => {
  //       setPhotosList(res.data.results);
  //       console.log(photosList);

  //       const suggestions = [
  //         ...new Set(
  //           res.data.results.flatMap((result) => {
  //             return result.tags.map((tag) => tag.title);
  //           })
  //         ),
  //       ];
  //       setSuggestionsArray([...suggestions]);
  //       setIsPopperVisible(false);
  //       // setGoToGalleryPage(true);
  //     })
  //     .then(() => {
  //       setGoToGalleryPage(false);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const getCollectionsFromApi = () => {
    axios
      .get(
        `    https://api.unsplash.com/search/collections?page=1&query=${searchInputValue}&client_id=${apiKey}
        `
      )
      .then((res) => {
        setCollectionList([...res.data.results]);
        console.log(res.data.results);
      });
  };

  const getUsersFromApi = () => {
    // <https://api.unsplash.com/search/collections?page=1&query=office>
    axios
      .get(
        // `https://api.unsplash.com/search/users?page=1&query=${searchInputValue}&client_id=${apiKey}`
        `https://api.unsplash.com/search/users?page=1&query=${searchInputValue}&client_id=${apiKey}`
      )
      .then((res) => {
        setUsersList([...res.data.results]);
        console.log(res.data.results);
      });
  };

  const filterKeyWords = () => {
    if (searchInputValue.length >= 3) {
      const filteredKeyWordsData = keywordsDataWithoutDuplicates.filter(
        (word) => {
          const tempWord = word.toString().slice(0, searchInputValue.length);
          return searchInputValue.toLowerCase() === tempWord;
        }
      );
      setKeyWordArray(filteredKeyWordsData);
    }
  };
  useEffect(() => {
    filterKeyWords();
  }, [searchInputValue]);

  const showPopper = (e) => {
    setSearchInputValue(e.target.value);
    if (e.target.value.length < 3) {
      setIsPopperVisible(false);
    } else {
      setIsPopperVisible(true);
    }
  };

  const findPhoto = (id) => {
    const findedPhoto = photosList.find((foto) => foto.id === id);
    setSinglePhoto(findedPhoto);
    console.log(singlePhoto);
  };
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
          collectionsList,
          usersList,
          activeSearchType,

          handleSetActiveSearchType,
          handleSearchInputValueChange,
          getPhotos,
          getUsersFromApi,
          findPhoto,
          openModal,
          closeModal,
          // getPhotosFromApiBySubmitingForm,
          // getPhotosFromApiByClickingOnSuggestionList,
          showPopper,
          setshowSearchValue,
          setSearchInputValue,
          getCollectionsFromApi,
        }}
      >
        <GlobalStyle />
        <Router />
        {goToGalleryPage ? (
          <Redirect to={`search/photos/${searchInputValue}`} />
        ) : null}
      </RootContext.Provider>
    </div>
  );
};

export default App;
