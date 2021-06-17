import React, { useContext, useRef } from "react";
import RootContext from "../../../context";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";

import { handleSearchInputValueChange } from "../../../actions";
import {
  StyledSearchInput,
  StyledSearchBtn,
  StyledPopper,
  StyledPopperListElement,
  StyledSearchWrapper,
  StyledForm,
  StyledSearch,
} from "../SearchStyledsComponents";
import { Link } from "react-router-dom";

const Search = ({ gallery }) => {
  const homeRef = useRef(null);

  const visible = (e) => {
    if (e.target.value.length < 3) {
      homeRef.current.style.display = "none";
    } else {
      homeRef.current.style.display = "block";
    }
  };
  const context = useContext(RootContext);
  const searchInputValue = useSelector(
    ({ searchInputValue }) => searchInputValue
  );
  const dispatch = useDispatch();
  const { keyWordsArray, getPhotos, activeSearchType } = context;

  return (
    <StyledSearchWrapper gallery={gallery}>
      <StyledForm
        onSubmit={(e) => {
          getPhotos(e);
        }}
      >
        <StyledSearch>
          <StyledSearchBtn type="submit">
            <SearchIcon fontSize="inherit" />
          </StyledSearchBtn>
          <StyledSearchInput
            type="text"
            placeholder="Search photos"
            onChange={(e) => {
              dispatch(handleSearchInputValueChange(e.target.value));
              visible(e);
            }}
            name="searchPhotos"
            autoComplete="off"
          />

          {searchInputValue.length ? (
            <StyledSearchBtn
              onClick={() => dispatch(handleSearchInputValueChange(""))}
            >
              <CloseIcon fontSize="inherit" />
            </StyledSearchBtn>
          ) : null}
        </StyledSearch>

        <StyledPopper ref={homeRef} gallery={gallery}>
          {keyWordsArray.map((word, index) => (
            <div key={index}>
              {index <= 4 ? (
                <Link
                  style={{ color: "black" }}
                  to={`/search/${activeSearchType}/${word}`}
                >
                  <StyledPopperListElement
                    key={index}
                    type="submit"
                    onClick={(e) => {
                      dispatch(handleSearchInputValueChange(word));
                      getPhotos(e, word);
                    }}
                  >
                    {word}
                  </StyledPopperListElement>
                </Link>
              ) : null}
            </div>
          ))}
        </StyledPopper>
      </StyledForm>
    </StyledSearchWrapper>
  );
};

export default Search;
