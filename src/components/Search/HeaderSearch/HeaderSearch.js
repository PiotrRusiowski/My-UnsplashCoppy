import React, { useContext, useRef } from "react";
import RootContext from "../../../context";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
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
  const context = useContext(RootContext);
  const {
    inputValue,
    keyWordsArray,
    // showPopper,
    setInputValue,
    getPhotos,
    activeSearchType,
    changeSearchInputValueByClickingOnSuggestionList,
    handleSearchInputValueChange,
    handleHeaderInputValue,
    headerInputValue,
  } = context;
  const headerPopperRef = useRef(null);
  const visible = (e) => {
    if (e.target.value.length < 3) {
      headerPopperRef.current.style.display = "none";
    } else {
      headerPopperRef.current.style.display = "block";
    }
  };
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
              handleHeaderInputValue(e);
              handleSearchInputValueChange(e);
              visible(e);
              //   showPopper(e, "headerInput");
            }}
            // value={headerInputValue}
            // value={inputValue}
            name="searchPhotos"
            autoComplete="off"
          />
          {inputValue.length ? (
            <StyledSearchBtn onClick={() => setInputValue("")}>
              <CloseIcon fontSize="inherit" />
            </StyledSearchBtn>
          ) : null}
        </StyledSearch>

        <StyledPopper ref={headerPopperRef} gallery={gallery}>
          <ul>
            {keyWordsArray.map((word, index) => (
              <>
                {index <= 4 ? (
                  <Link
                    style={{ color: "black" }}
                    to={`/search/${activeSearchType}/${word}`}
                  >
                    <StyledPopperListElement
                      key={index}
                      type="submit"
                      onClick={(e) => {
                        changeSearchInputValueByClickingOnSuggestionList(word);

                        getPhotos(e, word);
                      }}
                    >
                      {word}
                    </StyledPopperListElement>
                  </Link>
                ) : null}
              </>
            ))}
          </ul>
        </StyledPopper>
      </StyledForm>
    </StyledSearchWrapper>
  );
};

export default Search;
