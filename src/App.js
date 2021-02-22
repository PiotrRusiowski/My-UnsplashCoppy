import React, { useState, useEffect } from "react";
import RootContext from "./context";
import GlobalStyle from "./styles/GlobalStyles";
import unsplashData from "./data.json";
import { apiKey } from "./apiKey/index";
import axios from "axios";
import Router from "./routing/Router";
import { Link, Redirect } from "react-router-dom";
import { searchTypes } from "./utils/searchTypes";
import {
  getPhotosFromLocalStorage,
  getShowSearchValueFromLocalStorage,
} from "./utils/localStorageGetter";

const App = () => {
  const keywordsData = unsplashData.map((item) => {
    return item.keyword;
  });
  const keywordsDataWithoutDuplicates = [...new Set(keywordsData)];
  const [keyWordsArray, setKeyWordArray] = useState([]);
  const [suggestionsArray, setSuggestionsArray] = useState([]);
  const [photosList, setPhotosList] = useState(getPhotosFromLocalStorage());
  const [searchInputValue, setSearchInputValue] = useState("");
  const [showSearchValue, setshowSearchValue] = useState(
    getShowSearchValueFromLocalStorage()
  );
  const [singlePhoto, setSinglePhoto] = useState({
    id: "",
    urls: "",
    alt_description: "",
    user: { name: "", location: "", profile_image: { small: "" } },
  });
  const [isPopperVisible, setIsPopperVisible] = useState(false);
  const [goToGalleryPage, setGoToGalleryPage] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [collectionsList, setCollectionList] = useState([]);
  const [selectedCollectionList, setSelectedCollectionList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [activeSearchType, setActiveSearchType] = useState(searchTypes.photos);
  const [homeImg, setHomeImg] = useState({});
  const [likePhotosList, setLikePhotosList] = useState([]);

  const handleSetActiveSearchType = (searchType) => {
    setActiveSearchType(searchType);
    console.log(activeSearchType);
  };

  const handleSearchInputValueChange = (word) => {
    console.log(word);
    setSearchInputValue(word);
  };
  const getRandomPhoto = () => {
    axios.get(
      ` https://api.unsplash.com/photos/random?count=1&client_id=${apiKey} `
    );

    // .then((res) => {
    //   setHomeImg(res.data[0]);
    // });
    // .then((res) => {
    //   console.log(res);
    // });
  };

  const getCollectionsPhotos = () => {
    axios
      .get(
        ` https://api.unsplash.com/collections/94024577/photos?client_id=${apiKey}`
      )
      .then((res) => {
        setSelectedCollectionList(res);
      });
    // .then((res) => {
    //   console.log(res);
    // });
  };

  const getPhotos = (e, pageType) => {
    let tempWord;
    console.log(photosList);

    if (e.target.matches("form")) {
      tempWord = e.target.searchPhotos.value;
      e.preventDefault();
      setshowSearchValue(e.target.searchPhotos.value);
      localStorage.setItem(
        "showSearchValue",
        JSON.stringify(e.target.searchPhotos.value)
      );
      // window.location.pathname = `/search/${activeSearchType}/${showSearchValue}`;
    } else {
      tempWord = e.target.innerText;
      setSearchInputValue(e.target.innerText);

      setshowSearchValue(e.target.innerText);

      localStorage.setItem(
        "showSearchValue",
        JSON.stringify(e.target.innerText)
      );
      // window.location.pathname = `/search/${activeSearchType}/${showSearchValue}`;
    }
    console.log(tempWord);
    axios
      .get(
        ` https://api.unsplash.com/search/photos?&query=${tempWord}&client_id=${apiKey}`
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
        setSuggestionsArray([...suggestions]);
        setshowSearchValue(searchInputValue);
        setIsPopperVisible(false);

        localStorage.setItem("photos", JSON.stringify(res.data.results));

        if (!e.target.matches("button")) {
          if (pageType === "home") {
            setGoToGalleryPage(true);
          }
        }
      })
      .then(() => {
        setGoToGalleryPage(false);
      });
  };

  const getCollectionsFromApi = (e) => {
    axios
      .get(
        `    https://api.unsplash.com/search/collections?page=1&query=${searchInputValue}&client_id=${apiKey}
        `
      )
      .then((res) => {
        setCollectionList([...res.data.results]);
        console.log("collectionsData", res.data.results);
      });
  };
  const getCollectionsFromApiSuggestList = (suggest) => {
    axios
      .get(
        `    https://api.unsplash.com/search/collections?page=1&query=${suggest}&client_id=${apiKey}
        `
      )
      .then((res) => {
        setCollectionList([...res.data.results]);
        console.log("collectionsData", res.data.results);
      });
  };

  const getUsersFromApi = () => {
    axios
      .get(
        `https://api.unsplash.com/search/users?page=1&query=${searchInputValue}&client_id=${apiKey}`
      )
      .then((res) => {
        setUsersList([...res.data.results]);
        console.log("usersData", res.data.results);
      });
  };

  // const getPhotosCollectionsAndUserFromApi = (e) => {
  //   getPhotos(e);
  //   getCollectionsFromApi(e);
  //   getUsersFromApi(e);
  // };

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
  const addToLikePhotosList = () => {
    setLikePhotosList([...likePhotosList, singlePhoto]);
    console.log(likePhotosList);
  };
  const removeFromLikesPhotos = (id) => {
    const filteredLikesPhotos = likePhotosList.filter(
      (photo) => photo.id !== id
    );
    setLikePhotosList(filteredLikesPhotos);
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
          homeImg,
          likePhotosList,
          // getPhotosCollectionsAndUserFromApi,

          handleSetActiveSearchType,
          handleSearchInputValueChange,
          getPhotos,
          getUsersFromApi,
          findPhoto,
          openModal,
          closeModal,
          getCollectionsFromApiSuggestList,
          showPopper,
          setshowSearchValue,
          setSearchInputValue,
          getCollectionsFromApi,
          addToLikePhotosList,
          removeFromLikesPhotos,
          getCollectionsPhotos,
        }}
      >
        <GlobalStyle />
        <Router />
        {/* {goToGalleryPage ? (
          <Redirect to={`search/photos/${searchInputValue}`} />
        ) : null} */}
      </RootContext.Provider>
    </div>
  );
};

export default App;
