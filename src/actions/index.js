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

export const getPhotos = (queryValue) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?&query=${queryValue}&client_id=${apiKey}`
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
