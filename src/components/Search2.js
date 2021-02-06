import React, { useState, useEffect } from "react";
import unsplashData from "../data.json";
import styled from "styled-components";
import backGroundPhoto from "../theme/bgcPhoto/backGround.jpg";
import { apiKey } from "../apiKey/index";
import axios from "axios";

const SytledHome = styled.div`
  height: 85vh;
  position: relative;
  padding: 15px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  &:after {
    background-image: url(${backGroundPhoto});
    background-position: center;
    background-size: cover;
    background-position: center;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
const Container = styled.div`
  height: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
`;

const HomeContainer = styled.div`
  /* background-color: cadetblue; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: left;

  /* margin-top: auto; */
  /* margin-bottom: auto; */
`;
const StyledContent = styled.div`
  height: 45%;
  /* background-color: grey; */
  display: flex;
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  /* margin-top: auto; */
`;
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
  opacity:${({ isPopperVisible }) => (isPopperVisible ? "1" : "0")};
  }

`;
const StyledSearchWrapper = styled.div`
  max-width: 800px;
`;

const Search2 = ({ setPhotosList, photosList }) => {
  const [isPopperVisible, setIsPopperVisible] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [keyWordsArray, setKeyWordArray] = useState([]);
  const [searchPhotos, setSearchPhotos] = useState("");

  const keywordsData = unsplashData.map((item) => {
    return item.keyword;
  });

  const keywordsDataWithoutDuplicates = [...new Set(keywordsData)];

  // const filteredArray = keywordsData.map((item) => {
  //   const letter = item.substring(0, 1);
  // });
  const getPhotosFromApi = (e) => {
    e.preventDefault();
    console.log(searchInputValue);

    axios
      .get(
        ` https://api.unsplash.com/search/photos?&query=${searchInputValue}&client_id=${apiKey}`
      )

      .then((res) => {
        setPhotosList(res.data.results);
        console.log(photosList);
      });
  };

  const handleClick = (word) => {
    setSearchInputValue(word);
    axios
      .get(
        ` https://api.unsplash.com/search/photos?&query=${word}&client_id=${apiKey}`
      )

      .then((res) => {
        setPhotosList(res.data.results);
        console.log(photosList);
      });
  };

  const showPopper = (e) => {
    setSearchInputValue(e.target.value);
    if (e.target.value.length < 3) {
      setIsPopperVisible(false);
    } else {
      setIsPopperVisible(true);
    }
  };
  const filterKeyWords = () => {
    if (searchInputValue.length >= 3) {
      const filteredKeyWordsData = keywordsDataWithoutDuplicates.filter(
        (word) => {
          const tempWord = word.toString().slice(0, searchInputValue.length);
          return searchInputValue.toLowerCase() === tempWord;
        }
      );
      // console.log(filteredKeyWordsData);
      setKeyWordArray(filteredKeyWordsData);
    }
  };
  useEffect(() => {
    filterKeyWords();
  }, [searchInputValue]);

  return (
    <>
      <SytledHome>
        <Container>
          <HomeContainer>
            <StyledContent>
              <StyledTitle>Unsplash</StyledTitle>
              <h4>
                The internet’s source of freely-usable images.
                <br /> Powered by creators everywhere.
              </h4>
            </StyledContent>
            <StyledSearchWrapper>
              <StyledForm onSubmit={getPhotosFromApi}>
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
                            onClick={(e) => {
                              // setSearchInputValue(word);
                              // getPhotosFromApi(e);
                              handleClick(word);
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
          </HomeContainer>
        </Container>
      </SytledHome>
    </>
  );
};

export default Search2;
