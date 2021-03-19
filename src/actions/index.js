import { actionsTypes } from "./actionsTypes";
import axios from "axios";
import { apiKey } from "../apiKey";
import { useDispatch } from "react-redux";
export const setPhotosList = (res) => ({
  type: actionsTypes.setPhotosList,
  payload: res,
});
export function formActionRequest() {
  return {
    type: "FORM_ACTION_REQUEST",
  };
}
export const getSingleUserPhotos = (res) => {
  // axios
  //   .get(
  //     ` https://api.unsplash.com/users/${userName}/photos?client_id=${apiKey}`
  //   )
  //   .then((res) => {
  return {
    type: actionsTypes.getSingleUserPhotos,
    payload: res,
  };
};

// export const getSingleUserPhotosTest = ({ userName }) => {
//   // dispatch(formActionRequest());
//   return async function (dispatch) {
//     let response = await axios.get(
//       ` https://api.unsplash.com/users/${userName}/photos?client_id=${apiKey}`
//     );
//     dispatch(getSingleUserPhotos(response.data));
//   };
// };

export const getSingleUserPhotosTest = (userName) => {
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
          type: actionsTypes.getSingleUserPhotos,
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const getPhotos = () => {
  let photos = [];

  axios
    .get(
      `https://api.unsplash.com/search/photos?&query=animal&client_id=${apiKey}`
    )

    .then((res) => {
      photos = res.data.results;
      console.log(photos);
    })
    .catch((err) => console.error(err));

  console.log(photos);
  return {
    type: "GET_PHOTOS",
    payload: photos,
  };
};

export const sayHello = () => {
  return {
    type: "SAY_HELLO",
  };
};

export const sayHelloAfterTime = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(sayHello());
    }, 3000);
  };
};

export const getPhotos2 = (photos) => {
  return {
    type: "GET_PHOTOS_2",
    payload: photos,
  };
};

// export const getData = () => {
//   let photos = [];

//   axios
//     .get(
//       `https://api.unsplash.com/search/photos?&query=animal&client_id=${apiKey}`
//     )

//     .then((res) => {
//       photos = res.data.results;
//       console.log(photos);
//     })
//     .catch((err) => console.error(err));
//   if (photos.length !== 0) {
//     return (dispatch) => {
//       return dispatch(getPhotos2(photos));
//     };
//   }
// };
