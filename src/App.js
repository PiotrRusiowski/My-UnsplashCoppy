import React, { useState, useEffect } from "react";
import RootContext from "./context";
import GlobalStyle from "./styles/GlobalStyles";
import unsplashData from "./data.json";
import { apiKey } from "./apiKey/index";
import axios from "axios";
import Router from "./routing/Router";
import {
  getPhotosFromLocalStorage,
  getSearchInputValueFromLocalStorage,
  getCollectionsFromLocalStorage,
  getUsersFromLocalStorage,
  getSuggestionsFromLocalStorage,
  getActiveSearchTypeFromLocalStorage,
} from "./utils/localStorageGetter";
import { useDispatch, useSelector } from "react-redux";
import { setPhotosList } from "./actions";

const App = () => {
  const keywordsData = unsplashData.map((item) => {
    return item.keyword;
  });
  const keywordsDataWithoutDuplicates = [...new Set(keywordsData)];
  const [keyWordsArray, setKeyWordArray] = useState([]);
  const [suggestionsArray, setSuggestionsArray] = useState(
    getSuggestionsFromLocalStorage()
  );
  // const [photosList, setPhotosList] = useState(getPhotosFromLocalStorage());
  const [inputValue, setInputValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState(
    getSearchInputValueFromLocalStorage()
  );
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
  const [isPopperVisible, setIsPopperVisible] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [collectionsList, setCollectionList] = useState(
    getCollectionsFromLocalStorage()
  );
  const [selectedCollectionList, setSelectedCollectionList] = useState([]);
  const [usersList, setUsersList] = useState(getUsersFromLocalStorage());
  const [singleUserPhotos, setSingleUserPhotos] = useState([]);

  const [activeSearchType, setActiveSearchType] = useState(
    getActiveSearchTypeFromLocalStorage()
  );
  const [homeImg, setHomeImg] = useState("");
  const [likePhotosList, setLikePhotosList] = useState([]);
  /////////////////////////

  const reducerState = useSelector((state) => state);
  const { photosList } = reducerState;
  const dispatch = useDispatch();

  /////////
  const handleSetActiveSearchType = (searchType) => {
    setActiveSearchType(searchType);
  };

  const handleSearchInputValueChange = (e) => {
    setSearchInputValue(e.target.value);
  };
  useEffect(() => {
    setActiveSearchType("photos");
  }, []); ///////////?????
  useEffect(() => {
    localStorage.setItem("searchInputValue", JSON.stringify(searchInputValue));
  }, [searchInputValue]);

  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(photosList));
  }, [photosList]);

  useEffect(() => {
    localStorage.setItem("collections", JSON.stringify(collectionsList));
  }, [collectionsList]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(usersList));
  }, [usersList]);

  useEffect(() => {
    localStorage.setItem("activeSearchType", JSON.stringify(activeSearchType));
  }, [activeSearchType]);

  useEffect(() => {
    localStorage.setItem("suggestions", JSON.stringify(suggestionsArray));
  }, [suggestionsArray]);

  const getRandomPhoto = () => {
    axios
      .get(
        ` https://api.unsplash.com/photos/random?count=1&client_id=${apiKey} `
      )
      .then((res) => {
        setHomeImg(res.data[0].urls.regular);
      })

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRandomPhoto();
    console.log("jestem");
  }, []);

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

  const changeSearchInputValueByClickingOnSuggestionList = (word) => {
    setSearchInputValue(word);
  };

  const getPhotos = (e, word) => {
    // let tempWord;

    e.preventDefault();

    let queryValue;

    if (e.target.matches("form")) {
      queryValue = searchInputValue;
    } else {
      queryValue = word;
    }

    axios
      .get(
        ` https://api.unsplash.com/search/photos?&query=${queryValue}&client_id=${apiKey}`
      )

      .then((res) => {
        dispatch(setPhotosList(res.data.results));

        const suggestions = [
          ...new Set(
            res.data.results.flatMap((result) => {
              return result.tags.map((tag) => tag.title);
            })
          ),
        ];
        setSuggestionsArray([...suggestions]);
        setIsPopperVisible(false);
      })
      .then(() => {
        window.location.pathname = `/search/${activeSearchType}/${queryValue.replace(
          /\s/g,
          ""
        )}`;
      });

    //get collections
    axios
      .get(
        `    https://api.unsplash.com/search/collections?page=1&query=${queryValue}&client_id=${apiKey}
        `
      )
      .then((res) => {
        setCollectionList([...res.data.results]);
      });

    //get users
    axios
      .get(
        `https://api.unsplash.com/search/users?page=1&query=${queryValue}&client_id=${apiKey}`
      )
      .then((res) => {
        setUsersList([...res.data.results]);
      });
  };

  // const getCollectionsFromApi = (e) => {
  //   axios
  //     .get(
  //       `    https://api.unsplash.com/search/collections?page=1&query=${showSearchValue}&client_id=${apiKey}
  //       `
  //     )
  //     .then((res) => {
  //       setCollectionList([...res.data.results]);
  //     });
  // };
  // const getCollectionsFromApiSuggestList = (suggest) => {
  //   axios
  //     .get(
  //       `    https://api.unsplash.com/search/collections?page=1&query=${suggest}&client_id=${apiKey}
  //       `
  //     )
  //     .then((res) => {
  //       setCollectionList([...res.data.results]);
  //     });
  // };

  // const getUsersFromApi = () => {
  //   axios
  //     .get(
  //       `https://api.unsplash.com/search/users?page=1&query=${showSearchValue}&client_id=${apiKey}`
  //     )
  //     .then((res) => {
  //       setUsersList([...res.data.results]);
  //     });
  // };
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

  const showPopper = (e) => {
    setInputValue(e.target.value);

    if (e.target.value.length < 3) {
      setIsPopperVisible(false);
    } else {
      setIsPopperVisible(true);
    }
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
          isPopperVisible,
          keyWordsArray,
          inputValue,
          searchInputValue,
          suggestionsArray,
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
          findSingleUser,
          resetSinglePhoto,
          handleSetActiveSearchType,
          handleSearchInputValueChange,
          getPhotos,
          // getUsersFromApi,
          findPhoto,
          openModal,
          closeModal,
          // getCollectionsFromApiSuggestList,
          showPopper,
          setSearchInputValue,
          setInputValue,
          // getCollectionsFromApi,
          addToLikePhotosList,
          removeFromLikesPhotos,
          getCollectionsPhotos,
          getSingleUserPhotos,
          changeSearchInputValueByClickingOnSuggestionList,
        }}
      >
        <GlobalStyle />
        <Router />
      </RootContext.Provider>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   photosList: state.photosList,
// });
// const mapDispatchToProps = (dispatch) => ({
//   setPhotosList: (res) => dispatch(setPhotosListAction(res)),
// });

export default App;
