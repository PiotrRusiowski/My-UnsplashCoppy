import React, { useState, useEffect } from "react";
import RootContext from "./context";
import GlobalStyle from "./styles/GlobalStyles";
import unsplashData from "./data.json";
import Router from "./routing/Router";
import { exampleSuggestionsArray } from "./loclalData/localData";
import { useDispatch, useSelector } from "react-redux";
import {
  getPhotos as getPhotosAction,
  getCollections,
  getUsers,
} from "./actions";

const App = () => {
  const keywordsData = unsplashData.map((item) => {
    return item.keyword;
  });
  const keywordsDataWithoutDuplicates = [...new Set(keywordsData)];
  const [keyWordsArray, setKeyWordArray] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [singlePhoto, setSinglePhoto] = useState({
    id: "",
    urls: "",
    alt_description: "",
    user: { name: "", location: "", profile_image: { small: "" } },
  });

  const [singleUser, setSingleUser] = useState({
    name: "",
    bio: "",
    location: "",
    profile_image: "",
    portfolio_url: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);

  const [likePhotosList, setLikePhotosList] = useState([]);

  const reducerState = useSelector((state) => state);
  const {
    photosList,
    collectionsList,
    usersList,
    suggestionsTagsArray,
    searchInputValue,
    activeSearchType,
  } = reducerState;
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(photosList));
    localStorage.setItem("collections", JSON.stringify(collectionsList));
    localStorage.setItem("users", JSON.stringify(usersList));
    localStorage.setItem("searchInputValue", JSON.stringify(searchInputValue));
    localStorage.setItem("activeSearchType", JSON.stringify(activeSearchType));
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
  ]);

  const getPhotos = (e, word) => {
    e.preventDefault();

    let queryValue;

    if (e.target.matches("form")) {
      queryValue = searchInputValue;
    } else {
      queryValue = word;
    }
    dispatch(getPhotosAction(queryValue, activeSearchType));

    dispatch(getCollections(queryValue, activeSearchType));

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
  useEffect(() => {
    filterKeyWords();
  }, [searchInputValue]);

  const handleHomeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleHeaderInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const findPhoto = (id, arrayToFilter) => {
    const findedItem = arrayToFilter.find((foto) => foto.id === id);
    setSinglePhoto(findedItem);
  };
  const findSingleUser = (singleUser) => {
    setSingleUser(singleUser);
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
          keyWordsArray,
          inputValue,
          searchInputValue,
          modalIsOpen,
          singlePhoto,
          collectionsList,
          usersList,
          likePhotosList,
          singleUser,
          exampleSuggestionsArray,

          handleHomeInputValue,
          findSingleUser,
          getPhotos,
          findPhoto,
          openModal,
          closeModal,
          setInputValue,
          addToLikePhotosList,
          removeFromLikesPhotos,
          handleHeaderInputValue,
        }}
      >
        <GlobalStyle />
        <Router />
      </RootContext.Provider>
    </div>
  );
};

export default App;
