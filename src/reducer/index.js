import { actionsTypes } from "../actions/actionsTypes";

import {
  getPhotosFromLocalStorage,
  getSearchInputValueFromLocalStorage,
  getCollectionsFromLocalStorage,
  getUsersFromLocalStorage,
  getSuggestionsFromLocalStorage,
  getActiveSearchTypeFromLocalStorage,
} from "../utils/localStorageGetter";

const inicialState = {
  photosList: getPhotosFromLocalStorage(),
  likePhotosList: [],
  collectionsList: getCollectionsFromLocalStorage(),
  usersList: getUsersFromLocalStorage(),
  showSearchValue: getSearchInputValueFromLocalStorage(),
  sugestionArray: getSuggestionsFromLocalStorage(),
  activeSearchType: getActiveSearchTypeFromLocalStorage(),
  singleUserPhotos: [],
};

// const keywordsData = unsplashData.map((item) => {
//   return item.keyword;
// });
// const keywordsDataWithoutDuplicates = [...new Set(keywordsData)];
// const [keyWordsArray, setKeyWordArray] = useState([]);
// const [suggestionsArray, setSuggestionsArray] = useState(
//   getSuggestionsFromLocalStorage()
// );
// // const [photosList, setPhotosList] = useState(getPhotosFromLocalStorage());
// const [searchInputValue, setSearchInputValue] = useState("");
// const [showSearchValue, setshowSearchValue] = useState(
//   getShowSearchValueFromLocalStorage()
// );
// const [singlePhoto, setSinglePhoto] = useState({
//   id: "",
//   urls: "",
//   alt_description: "",
//   user: { name: "", location: "", profile_image: { small: "" } },
// });
// const [modalPhoto, setModalPhoto] = useState({
//   id: "",
//   urls: "",
//   alt_description: "",
//   user: { name: "", location: "", profile_image: { small: "" } },
// });
// const [singleUser, setSingleUser] = useState({
//   name: "",
//   bio: "",
//   location: "",
//   profile_image: "",
// });
// const [isPopperVisible, setIsPopperVisible] = useState(false);
// const [modalIsOpen, setIsOpen] = useState(false);
// const [collectionsList, setCollectionList] = useState(
//   getCollectionsFromLocalStorage()
// );
// const [selectedCollectionList, setSelectedCollectionList] = useState([]);
// const [usersList, setUsersList] = useState(getUsersFromLocalStorage());
// const [singleUserPhotos, setSingleUserPhotos] = useState([]);

// const [activeSearchType, setActiveSearchType] = useState(
//   getActiveSearchTypeFromLocalStorage()
// );
// const [homeImg, setHomeImg] = useState("");
//

const reducer = (state = inicialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actionsTypes.setPhotosList:
      return {
        ...state,
        photosList: payload,
      };
    case actionsTypes.getSingleUserPhotos:
      // let setSingleUserPhotos
      // axios
      //   .get(
      //     ` https://api.unsplash.com/users/${payload}/photos?client_id=${apiKey}`
      //   )
      //   .then((res) => {
      //     setSingleUserPhotos = res.data;
      //   });
      // let setSingleUserPhotos;
      console.log(payload);
      return {
        ...state,
        singleUserPhotos: payload,
      };

    default:
      return state;
  }
};

export default reducer;