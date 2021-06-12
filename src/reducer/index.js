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
  collectionsList: getCollectionsFromLocalStorage(),
  usersList: getUsersFromLocalStorage(),
  showSearchValue: getSearchInputValueFromLocalStorage(),
  activeSearchType: getActiveSearchTypeFromLocalStorage(),
  suggestionsTagsArray: getSuggestionsFromLocalStorage(),
  searchInputValue: getSearchInputValueFromLocalStorage(),
  likePhotosList: [],
  singleUserPhotos: [],
  randomPhoto: "",
};

const reducer = (state = inicialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actionsTypes.GET_RANDOM_PHOTO:
      return {
        ...state,
        randomPhoto: payload,
      };

    case actionsTypes.GET_SINGLE_USER_PHOTOS:
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
    case actionsTypes.HANDLE_SEARCH_INPUT_VALUE_CHANGE:
      return {
        ...state,
        searchInputValue: payload,
      };

    default:
      return state;
  }
};

export default reducer;
