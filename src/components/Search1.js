import React, { useState } from "react";
import { connect } from "react-redux";
import {
  setPhotosList as setPhotosListAction,
  setSearchValue as setSearchValueAction,
} from "../actions";
import axios from "axios";
// import { apiKey } from "../apiKey";

const Search = ({ setSearchValue, searchValue, setPhotosList }) => {
  const getPhotosFromApi = () => {
    axios
      .get(
        ` https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${apiKey}`
      )

      .then((res) => {
        setPhotosList(res.data.results);
        console.log(res.data);
      });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.searchValue.value);
  };
  return (
    <form
      onSubmit={(e) => {
        getPhotosFromApi();
        handleSearch(e);
      }}
    >
      <input name="search" name="searchValue" />
    </form>
  );
};
const mapDispatchToPropos = (dispatch) => ({
  setPhotosList: (res) => dispatch(setPhotosListAction(res)),
  setSearchValue: (value) => dispatch(setSearchValueAction(value)),
});
const mapStateToProps = (state) => ({
  searchValue: state.searchValue,
});
export default connect(mapStateToProps, mapDispatchToPropos)(Search);
