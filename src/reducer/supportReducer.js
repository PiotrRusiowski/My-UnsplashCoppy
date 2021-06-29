import { actionsTypes } from "../actions/actionsTypes";

import { getLikesPhotosFromLocalStorage } from "../utils/localStorageGetter";

const inicialState = {
  likesPhotosList: getLikesPhotosFromLocalStorage(),

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

const supportReducer = (state = inicialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actionsTypes.GET_RANDOM_PHOTO:
      return {
        ...state,
        randomPhoto: payload,
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

export default supportReducer;
