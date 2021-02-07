import React, { useContext } from "react";
import styled, { css } from "styled-components";
import RootContext from "../context";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
const StyledForm = styled.form`
  height: 100%;
  position: relative;
`;
const StyledSearchWrapper = styled.div`
  margin-top: 15px;
  max-width: 800px;
  border-radius: 5px;
  background-color: white;
  height: 54px;
  outline: none;
  ${({ gallery }) =>
    gallery &&
    css`
      background-color: rgb(238, 238, 238);
      border-bottom-left-radius: 40px;
      border-top-left-radius: 40px;
      border-bottom-right-radius: 40px;
      border-top-right-radius: 40px;
      height: 35px;
      &:hover {
        border: solid rgb(238, 238, 238) 1px;
        background-color: white;
      }
    `}
`;
const StyledSearch = styled.div`
  position: relative;
  max-width: 800px;

  height: 100%;
  display: flex;
  width: 100%;
`;
const StyledSearchInput = styled.input`
  border: none;
  height: 100%;
  flex-grow: 1;
  border-radius: 5px;
  font-size: 15px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const StyledSearchBtn = styled.div`
  display: flex;
  height: 100%;
  width: 50px;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  color: #767676;
  cursor: pointer;
`;

const StyledPopper = styled.div`
  width: 100%;
  position: absolute;
  padding: 10px 0px;
  margin-top: 5px;
  z-index: 300;
  color: black;
  border-radius: 5px;
  background-color: white;
  display: flex;
  /* align-items: center; */
  display: ${({ isPopperVisible }) => (isPopperVisible ? "block" : "none")};
  ${({ gallery }) =>
    gallery &&
    css`
      border: solid rgb(238, 238, 238) 1px;
    `}
`;
const StyledPopperListElement = styled.li`
  padding: 8px;
  text-align: left;
  &:hover {
    background-color: rgb(203, 203, 203);
  }
`;

const Search = ({ gallery }) => {
  const context = useContext(RootContext);
  const {
    searchInputValue,
    isPopperVisible,
    keyWordsArray,
    getPhotosFromApiBySubmitingForm,
    getPhotosFromApiByClickingOnSuggestionList,
    showPopper,
    setshowSearchValue,
    setSearchInputValue,
  } = context;

  return (
    <StyledSearchWrapper gallery={gallery}>
      <StyledForm onSubmit={getPhotosFromApiBySubmitingForm}>
        <StyledSearch>
          <StyledSearchBtn onClick={getPhotosFromApiBySubmitingForm}>
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
                    onClick={() => {
                      getPhotosFromApiByClickingOnSuggestionList(word);
                      setshowSearchValue(word);
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
