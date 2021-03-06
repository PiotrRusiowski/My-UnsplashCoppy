import {
  getPhotosFromLocalStorage,
  getShowSearchValueFromLocalStorage,
  getCollectionsFromLocalStorage,
  getUsersFromLocalStorage,
  getSuggestionsFromLocalStorage,
  getActiveSearchTypeFromLocalStorage,
} from "../utils/localStorageGetter";

const inicialState = {
  test: 20,
  photosList: getPhotosFromLocalStorage(),
};

const reducer = (state = inicialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "TEST":
      return {
        ...state,
        test: payload,
      };
    case "SET_PHOTOS_LIST":
      return {
        ...state,
        photosList: payload,
      };

    default:
      return state;
  }
};

export default reducer;
