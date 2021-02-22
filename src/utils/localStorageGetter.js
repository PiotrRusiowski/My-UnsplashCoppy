export const getPhotosFromLocalStorage = () => {
  let localStoragePhotos;

  if (localStorage.getItem("photos")) {
    localStoragePhotos = JSON.parse(localStorage.getItem("photos"));
  } else {
    localStoragePhotos = [];
  }

  return localStoragePhotos;
};

export const getShowSearchValueFromLocalStorage = () => {
  let localStorageShowSearchValue;

  if (localStorage.getItem("showSearchValue")) {
    localStorageShowSearchValue = JSON.parse(
      localStorage.getItem("showSearchValue")
    );
  } else {
    localStorageShowSearchValue = "";
  }

  return localStorageShowSearchValue;
};
