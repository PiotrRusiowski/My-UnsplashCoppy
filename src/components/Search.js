import React, { useContext } from "react";
import styled from "styled-components";
import RootContext from "../context";
const StyledForm = styled.form`
  /* background-color: cadetblue; */
  height: 100%;
  position: relative;
  /* height: 10%; */
  /* top: calc(100% + 4px); */
`;
const StyledSearchInput = styled.input`
  width: 100%;
  height: 55px;
  position: relative;
  max-width: 800px;
  border: none;
  border-radius: 5px;

  /* position: relative; */
`;
const StyledPopper = styled.div`
width: 100%;
/* max-height:43%; */
 
position:absolute;
/* bottom:0; */
margin-top:5px;
z-index:300;
color:black;
border-radius: 5px;
background-color: white;
display:flex;
align-items:center;
/* opacity:${({ isPopperVisible }) => (isPopperVisible ? "1" : "0")}; */
display:${({ isPopperVisible }) => (isPopperVisible ? "block" : "none")};
}

`;
const StyledSearchWrapper = styled.div`
  max-width: 800px;
`;
const Search = () => {
  const context = useContext(RootContext);
  const {
    searchInputValue,
    isPopperVisible,
    keyWordsArray,
    getPhotosFromApiBySubmitingForm,
    getPhotosFromApiByClickingOnSuggestionList,
    showPopper,
    setshowSearchValue,
  } = context;

  return (
    <StyledSearchWrapper>
      <StyledForm onSubmit={getPhotosFromApiBySubmitingForm}>
        <StyledSearchInput
          type="text"
          placeholder="Search free high-resolution photos"
          onChange={showPopper}
          value={searchInputValue}
          name="searchPhotos"
          autoComplete="off"
        />
        <StyledPopper isPopperVisible={isPopperVisible}>
          <ul>
            {keyWordsArray.map((word, index) => (
              <>
                {index <= 4 ? (
                  <li
                    key={index}
                    onClick={() => {
                      getPhotosFromApiByClickingOnSuggestionList(word);
                      setshowSearchValue(word);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <p>{word}</p>
                  </li>
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
