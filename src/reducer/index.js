import { actionsTypes } from "../actions/actionsTypes";

import {
  getPhotosFromLocalStorage,
  getSearchInputValueFromLocalStorage,
  getCollectionsFromLocalStorage,
  getUsersFromLocalStorage,
  getSuggestionsFromLocalStorage,
  getActiveSearchTypeFromLocalStorage,
  getLikesPhotosFromLocalStorage,
} from "../utils/localStorageGetter";

const inicialState = {
  photosList: getPhotosFromLocalStorage(),
  collectionsList: getCollectionsFromLocalStorage(),
  usersList: getUsersFromLocalStorage(),
  showSearchValue: getSearchInputValueFromLocalStorage(),
  activeSearchType: getActiveSearchTypeFromLocalStorage(),
  suggestionsTagsArray: getSuggestionsFromLocalStorage(),
  searchInputValue: getSearchInputValueFromLocalStorage(),
  likesPhotosList: getLikesPhotosFromLocalStorage(),
  singleUserPhotos: [],
  singleCollectionPhotos: [],
  randomPhoto: "",
  singlePhoto: {
    id: "",
    urls: "",
    alt_description: "",
    user: { name: "", location: "", profile_image: { small: "" } },
  },
  singleUser: {
    name: "",
    bio: "",
    location: "",
    profile_image: "",
    portfolio_url: "",
  },
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
    case actionsTypes.FIND_PHOTO_DETAILS:
      const findItem = payload.photosList.find(
        (photo) => photo.id === payload.id
      );
      return {
        ...state,
        singlePhoto: findItem,
      };
    case actionsTypes.ADD_TO_LIKES_PHOTOS_LIST:
      return {
        ...state,
        likesPhotosList: [...state.likesPhotosList, state.singlePhoto],
      };
    case actionsTypes.REMOVE_FROM_LIKES_PHOTOS_LIST:
      const filteredLikesPhotos = state.likesPhotosList.filter(
        (photo) => photo.id !== payload
      );
      return {
        ...state,
        likesPhotosList: [...filteredLikesPhotos],
      };
    case actionsTypes.FIND_USER_DETAILS:
      return {
        ...state,
        singleUser: payload,
      };

    default:
      return state;
  }
};

export default reducer;
