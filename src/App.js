import React, { useState, useEffect } from "react";
import RootContext from "./context";
import GlobalStyle from "./styles/GlobalStyles";
import unsplashData from "./data.json";
import { apiKey } from "./apiKey/index";
import axios from "axios";
import Router from "./routing/Router";
import { exampleSuggestionsArray } from "./loclalData/localData";
import {
  getSearchInputValueFromLocalStorage,
  getActiveSearchTypeFromLocalStorage,
} from "./utils/localStorageGetter";
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
  const [modalPhoto, setModalPhoto] = useState({
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

  const [selectedCollectionList, setSelectedCollectionList] = useState([]);
  const [singleUserPhotos, setSingleUserPhotos] = useState([]);

  const [activeSearchType, setActiveSearchType] = useState(
    getActiveSearchTypeFromLocalStorage()
  );
  const [homeImg, setHomeImg] = useState("");
  const [likePhotosList, setLikePhotosList] = useState([]);
  const [homeInputValue, setHomeInputValue] = useState("");

  const reducerState = useSelector((state) => state);
  const {
    photosList,
    collectionsList,
    usersList,
    suggestionsTagsArray,
    searchInputValue,
  } = reducerState;
  const dispatch = useDispatch();

  /////////

  const handleSetActiveSearchType = (searchType) => {
    setActiveSearchType(searchType);
  };

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

  const getCollectionsPhotos = (id) => {
    axios
      .get(
        ` https://api.unsplash.com/collections/${id}/photos?client_id=${apiKey}`
      )
      .then((res) => {
        setSelectedCollectionList(res.data);
      })
      .then(() => {
        console.log(selectedCollectionList);
      });
  };

  // const changeSearchInputValueByClickingOnSuggestionList = (word) => {
  //   setSearchInputValue(word);
  // };

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

  const getSingleUserPhotos = (userName) => {
    axios

      .get(
        ` https://api.unsplash.com/users/${userName}/photos?client_id=${apiKey}`
      )
      .then((res) => {
        setSingleUserPhotos(res.data);
      });
  };

  const filterKeyWords = () => {
    if (inputValue.length >= 3) {
      const filteredKeyWordsData = keywordsDataWithoutDuplicates.filter(
        (word) => {
          const tempWord = word.toString().slice(0, inputValue.length);
          return inputValue.toLowerCase() === tempWord;
        }
      );
      setKeyWordArray(filteredKeyWordsData);
    }
  };
  useEffect(() => {
    filterKeyWords();
  }, [inputValue]);

  const handleHomeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleHeaderInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const findPhoto = (id, arrayToFilter) => {
    const findedItem = arrayToFilter.find((foto) => foto.id === id);
    setSinglePhoto(findedItem);
    setModalPhoto(findedItem);
  };
  const findSingleUser = (singleUser) => {
    setSingleUser(singleUser);
    console.log(singleUser);
  };

  const resetSinglePhoto = () => {
    setSinglePhoto({
      id: "",
      urls: "",
      alt_description: "",
      user: { name: "", location: "", profile_image: { small: "" } },
    });
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
          activeSearchType,
          homeImg,
          likePhotosList,
          selectedCollectionList,
          singleUserPhotos,
          modalPhoto,
          singleUser,
          homeInputValue,
          exampleSuggestionsArray,

          handleHomeInputValue,
          findSingleUser,
          resetSinglePhoto,
          handleSetActiveSearchType,

          getPhotos,
          findPhoto,
          openModal,
          closeModal,
          setInputValue,
          addToLikePhotosList,
          removeFromLikesPhotos,
          getCollectionsPhotos,
          getSingleUserPhotos,
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
