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
