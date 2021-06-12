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
  activeSearchType: getActiveSearchTypeFromLocalStorage(),
  singleUserPhotos: [],
  testText: "",
  randomPhoto: "",
  suggestionsTagsArray: getSuggestionsFromLocalStorage(),
};

const reducer = (state = inicialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actionsTypes.setPhotosList:
      return {
        ...state,
        photosList: payload,
      };

    case actionsTypes.GET_RANDOM_PHOTO:
      return {
        ...state,
        randomPhoto: payload,
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

    case actionsTypes.GET_PHOTOS:
      return {
        ...state,
        photosList: [...payload.photos],
        suggestionsTagsArray: [...payload.suggestions],
      };

    case actionsTypes.GET_COLLECTIONS:
      return {
        ...state,
        collectionsList: [...payload],
      };
    case actionsTypes.GET_USERS:
      return {
        ...state,
        usersList: [...payload],
      };

    default:
      return state;
  }
};

export default reducer;
