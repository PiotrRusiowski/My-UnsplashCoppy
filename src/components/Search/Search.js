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

const Search = ({ gallery }) => {
  const context = useContext(RootContext);
  const {
    searchInputValue,
    isPopperVisible,
    keyWordsArray,
    getPhotosFromApiBySubmitingForm,
    showPopper,
    setSearchInputValue,
    handleSearchInputValueChange,
    getPhotos,
  } = context;

  return (
    <StyledSearchWrapper gallery={gallery}>
      <StyledForm onSubmit={getPhotos}>
        <StyledSearch>
          <StyledSearchBtn type="submit">
            <SearchIcon fontSize="inherit" />
          </StyledSearchBtn>
          <StyledSearchInput
            type="text"
            placeholder="Search free high-resolution photos"
            onChange={showPopper}
            value={searchInputValue}
            name="searchPhotos"
            autoComplete="off"
          />
          {searchInputValue.length ? (
            <StyledSearchBtn onClick={() => setSearchInputValue("")}>
              <CloseIcon fontSize="inherit" />
            </StyledSearchBtn>
          ) : null}
        </StyledSearch>
        <StyledPopper isPopperVisible={isPopperVisible} gallery={gallery}>
          <ul>
            {keyWordsArray.map((word, index) => (
              <>
                {index <= 4 ? (
                  <StyledPopperListElement
                    key={index}
                    onClick={(e) => {
                      // getPhotosFromApiByClickingOnSuggestionList(word);
                      // handleSearchInputValueChange(word);
                      getPhotos(e);
                      // setshowSearchValue(word);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {word}
                  </StyledPopperListElement>
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
