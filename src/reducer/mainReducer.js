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
  singleUserPhotos: [],
  singleCollectionPhotos: [],
};

const mainReducer = (state = inicialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
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
    case actionsTypes.GET_SINGLE_COLLECTION_PHOTOS:
      return {
        ...state,
        singleCollectionPhotos: [...payload],
      };
    case actionsTypes.SET_ACTIVE_SEARCH_TYPE:
      return {
        ...state,
        activeSearchType: payload,
      };

    case actionsTypes.INCREASE_PAGE_COUNTER:
      return {
        ...state,
        pageCounter: state.pageCounter + 1,
      };

    case actionsTypes.GET_MORE_PHOTOS:
      return {
        ...state,
        photosList: [...state.photosList, ...payload],
      };

    default:
      return state;
  }
};

export default mainReducer;
