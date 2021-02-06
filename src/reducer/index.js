const inicialState = {
  searchValue: "",
  photosList: [],
};
const reducer = (state = inicialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_PHOTOS_LIST":
      return {
        ...state,
        photosList: payload,
      };
    case "SET_SEARCH_VALUE":
      return {
        ...state,
        searchValue: payload,
      };
    default:
      return state;
  }
};

export default reducer;
