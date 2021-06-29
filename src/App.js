import React, { useState, useEffect } from "react";
import RootContext from "./context";
import GlobalStyle from "./styles/GlobalStyles";
import unsplashData from "./data.json";
import Router from "./routing/Router";
import { useDispatch, useSelector } from "react-redux";
import {
  getPhotos as getPhotosAction,
  getCollections,
  getUsers,
  getRandomPhoto,
  increasePageCounter,
  getMorePhotosAction,
} from "./actions";

const App = () => {
  const keywordsData = unsplashData.map((item) => {
    return item.keyword;
  });
  const keywordsDataWithoutDuplicates = [...new Set(keywordsData)];
  const [keyWordsArray, setKeyWordArray] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const mainReducerState = useSelector((state) => state.mainReducer);
  const {
    photosList,
    collectionsList,
    usersList,
    suggestionsTagsArray,
    searchInputValue,
    activeSearchType,
    pageCounter,
    showSearchValue,
  } = mainReducerState;

  const supportReducerState = useSelector((state) => state.supportReducer);
  const { likesPhotosList } = supportReducerState;

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(photosList));
    localStorage.setItem("collections", JSON.stringify(collectionsList));
    localStorage.setItem("users", JSON.stringify(usersList));
    localStorage.setItem("searchInputValue", JSON.stringify(searchInputValue));
    localStorage.setItem("activeSearchType", JSON.stringify(activeSearchType));
    localStorage.setItem("likesPhotos", JSON.stringify(likesPhotosList));
    localStorage.setItem(
      "suggestionsTagsArray",
      JSON.stringify(suggestionsTagsArray)
    );
  }, [
    photosList,
    collectionsList,
    usersList,
    searchInputValue,
    activeSearchType,
    suggestionsTagsArray,
    likesPhotosList,
  ]);
  useEffect(() => {
    filterKeyWords();
  }, [searchInputValue]);
  useEffect(() => {
    dispatch(getRandomPhoto());
  }, []);
  //
  const getPhotos = (e, word) => {
    e.preventDefault();

    let queryValue;

    if (e.target.matches("form")) {
      queryValue = searchInputValue;
    } else {
      queryValue = word;
    }
    dispatch(getPhotosAction(queryValue, pageCounter));

    dispatch(getCollections(queryValue));

    dispatch(getUsers(queryValue, activeSearchType));
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
          keyWordsArray,
          modalIsOpen,
          usersList,
          getPhotos,
          openModal,
          closeModal,
        }}
      >
        <GlobalStyle />
        <Router />
      </RootContext.Provider>
    </div>
  );
};

export default App;
