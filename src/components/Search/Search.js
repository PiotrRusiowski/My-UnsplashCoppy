import React, { useContext } from "react";
import RootContext from "../../context";
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
} from "./SearchStyledsComponents";
import { Link } from "react-router-dom";

const Search = ({ gallery }) => {
  const context = useContext(RootContext);
  const {
    inputValue,
    isPopperVisible,
    keyWordsArray,
    showPopper,
    setInputValue,
    getPhotos,
    activeSearchType,
    changeSearchInputValueByClickingOnSuggestionList,
    handleSearchInputValueChange,
  } = context;

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
              showPopper(e);
              handleSearchInputValueChange(e);
            }}
            value={inputValue}
            name="searchPhotos"
            autoComplete="off"
          />
          {inputValue.length ? (
            <StyledSearchBtn onClick={() => setInputValue("")}>
              <CloseIcon fontSize="inherit" />
            </StyledSearchBtn>
          ) : null}
        </StyledSearch>

        <StyledPopper isPopperVisible={isPopperVisible} gallery={gallery}>
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
