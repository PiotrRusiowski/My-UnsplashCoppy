export const getPhotosFromLocalStorage = () => {
  let localStoragePhotos;

  if (localStorage.getItem("photos")) {
    localStoragePhotos = JSON.parse(localStorage.getItem("photos"));
  } else {
    localStoragePhotos = [];
  }

  return localStoragePhotos;
};

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

export const getUsersFromLocalStorage = () => {
  let localStorageUsers;

  if (localStorage.getItem("users")) {
    localStorageUsers = JSON.parse(localStorage.getItem("users"));
  } else {
    localStorageUsers = [];
  }

  return localStorageUsers;
};

export const getSearchInputValueFromLocalStorage = () => {
  let localStorageShowSearchValue;

  if (localStorage.getItem("searchInputValue")) {
    localStorageShowSearchValue = JSON.parse(
      localStorage.getItem("searchInputValue")
    );
  } else {
    localStorageShowSearchValue = "";
  }

  return localStorageShowSearchValue;
};

export const getActiveSearchTypeFromLocalStorage = () => {
  let localStorageActiveSearchType;

  if (localStorage.getItem("activeSearchType")) {
    localStorageActiveSearchType = JSON.parse(
      localStorage.getItem("activeSearchType")
    );
  } else {
    localStorageActiveSearchType = "photos";
  }
  return localStorageActiveSearchType;
};

export const getSuggestionsFromLocalStorage = () => {
  let localStorageSuggestions;

  if (localStorage.getItem("suggestionsTagsArray")) {
    localStorageSuggestions = JSON.parse(
      localStorage.getItem("suggestionsTagsArray")
    );
  } else {
    localStorageSuggestions = [];
  }
  return localStorageSuggestions;
};
