export const getPhotosFromLocalStorage = () =>
  localStorage.getItem("photos")
    ? JSON.parse(localStorage.getItem("photos"))
    : [];

export const getCollectionsFromLocalStorage2 = () => {
  let localStorageCollections;

  if (localStorage.getItem("collections")) {
    localStorageCollections = JSON.parse(localStorage.getItem("collections"));
  } else {
    localStorageCollections = [];
  }

  return localStorageCollections;
};

export const getCollectionsFromLocalStorage = () =>
  localStorage.getItem("collections")
    ? JSON.parse(localStorage.getItem("collections"))
    : [];

export const getUsersFromLocalStorage = () =>
  localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

export const getSearchInputValueFromLocalStorage = () =>
  localStorage.getItem("searchInputValue")
    ? JSON.parse(localStorage.getItem("searchInputValue"))
    : "";

export const getActiveSearchTypeFromLocalStorage = () =>
  localStorage.getItem("activeSearchType")
    ? JSON.parse(localStorage.getItem("activeSearchType"))
    : "photos";

export const getSuggestionsFromLocalStorage = () =>
  localStorage.getItem("suggestionsTagsArray")
    ? JSON.parse(localStorage.getItem("suggestionsTagsArray"))
    : [];
