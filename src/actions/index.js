import { actionsTypes } from "./actionsTypes";
import axios from "axios";
import { apiKey } from "../apiKey";

export const getSingleUserPhotos = (userName) => {
  return (dispatch) => {
    return axios
      .get(
        ` https://api.unsplash.com/users/${userName}/photos?client_id=${apiKey}`
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: actionsTypes.GET_SINGLE_USER_PHOTOS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getRandomPhoto = () => {
  return (dispatch) => {
    axios
      .get(`https://api.unsplash.com/photos/random?count=1&client_id=${apiKey}`)
      .then((res) => {
        dispatch({
          type: actionsTypes.GET_RANDOM_PHOTO,
          payload: res.data[0].urls.regular,
        });
      })
      .catch((err) => console.error(err));
  };
};

export const getPhotos = (queryValue, pageCounter) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${pageCounter}pa&query=${queryValue}&client_id=${apiKey}`
      )

      .then((res) => {
        const suggestions = [
          ...new Set(
            res.data.results.flatMap((result) => {
              return result.tags.map((tag) => tag.title);
            })
          ),
        ];

        dispatch({
          type: actionsTypes.GET_PHOTOS,
          payload: {
            photos: res.data.results,
            suggestions,
          },
        });
      });
  };
};

export const getCollections = (queryValue) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.unsplash.com/search/collections?page=1&query=${queryValue}&client_id=${apiKey}`
      )

      .then((res) => {
        dispatch({
          type: actionsTypes.GET_COLLECTIONS,
          payload: res.data.results,
        });
      });
  };
};
export const getSingleCollectionPhotos = (id) => {
  return (dispatch) => {
    axios
      .get(
        ` https://api.unsplash.com/collections/${id}/photos?client_id=${apiKey}`
      )
      .then((res) => {
        dispatch({
          type: actionsTypes.GET_SINGLE_COLLECTION_PHOTOS,
          payload: res.data,
        });
      });
  };
};

export const getUsers = (queryValue, activeSearchType) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.unsplash.com/search/users?page=1&query=${queryValue}&client_id=${apiKey}`
      )

      .then((res) => {
        console.log(res, "Users");
        dispatch({
          type: actionsTypes.GET_USERS,
          payload: res.data.results,
        });
      })
      .then(() => {
        window.location.pathname = `/search/${activeSearchType}/${queryValue.replace(
          /\s/g,
          ""
        )}`;
      });
  };
};

export const handleSearchInputValueChange = (e) => ({
  type: actionsTypes.HANDLE_SEARCH_INPUT_VALUE_CHANGE,
  payload: e,
});
export const setActiveSearchType = (activeSearchType) => ({
  type: actionsTypes.SET_ACTIVE_SEARCH_TYPE,
  payload: activeSearchType,
});
export const findPhotoDetails = (id, photosList) => ({
  type: actionsTypes.FIND_PHOTO_DETAILS,
  payload: {
    id: id,
    photosList: photosList,
  },
});
export const findUserDetails = (user) => ({
  type: actionsTypes.FIND_USER_DETAILS,
  payload: user,
});
export const addToLikesPhotosList = () => ({
  type: actionsTypes.ADD_TO_LIKES_PHOTOS_LIST,
});
export const removeFromLikesPhotos = (id) => ({
  type: actionsTypes.REMOVE_FROM_LIKES_PHOTOS_LIST,
  payload: id,
});

export const increasePageCounter = () => ({
  type: actionsTypes.INCREASE_PAGE_COUNTER,
});

export const getMorePhotosAction = (queryValue, pageCounter) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${pageCounter}pa&query=${queryValue}&client_id=${apiKey}`
      )

      .then((res) => {
        dispatch({
          type: actionsTypes.GET_MORE_PHOTOS,
          payload: res.data.results,
        });
      });
  };
};
export const getMoreCollectionsAction = (queryValue, pageCounter) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.unsplash.com/search/collections?page=${pageCounter}&query=${queryValue}&client_id=${apiKey}`
      )

      .then((res) => {
        dispatch({
          type: actionsTypes.GET_MORE_COLLECTIONS,
          payload: res.data.results,
        });
      });
  };
};
export const getMoreUsersAction = (queryValue, pageCounter) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.unsplash.com/search/users?page=${pageCounter}&query=${queryValue}&client_id=${apiKey}`
      )

      .then((res) => {
        dispatch({
          type: actionsTypes.GET_MORE_USERS,
          payload: res.data.results,
        });
      });
  };
};
