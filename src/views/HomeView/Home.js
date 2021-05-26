import React, { useContext, useEffect } from "react";
import RootContext from "../../context";
import { connect, useDispatch, useSelector } from "react-redux";
import HomeSearch from "../../components/Search/HomeSearch/HomeSearch";
import { Container } from "../../styles/globalStyledComponents";
import SuggestionsList from "../../components/galleryComponets/Lists/SuggestionsList/SuggestionsList";
import {
  StyledHome,
  StyledContent,
  HomeWrapper,
  StyledTitle,
  StyledLink,
} from "./HomeStyledsComponents";
import { getRandomPhoto } from "../../actions";

const Home = () => {
  const context = useContext(RootContext);
  const { exampleSuggestionsArray } = context;
  const main = true;
  const dispatch = useDispatch();

  const homeImg = useSelector(({ randomPhoto }) => randomPhoto);

  useEffect(() => {
    dispatch(getRandomPhoto());
  }, []);

  return (
    <>
      <SuggestionsList suggestionsArray={exampleSuggestionsArray} main={main} />
      <StyledHome img={homeImg}>
        <Container>
          <HomeWrapper>
            <StyledContent>
              <StyledTitle>Unsplash</StyledTitle>
              <p>
                The internet’s source of{" "}
                <StyledLink href="https://unsplash.com/license">
                  freely-usable images.
                </StyledLink>
                <br /> Powered by creators everywhere.
              </p>
            </StyledContent>
            <HomeSearch pageType="home" />
          </HomeWrapper>
        </Container>
        {/* <button onClick={() => dispatch(getData())}>get photos</button>
        <button onClick={() => dispatch(sayHelloAfterTime())}>Say hello</button>
        <h1 style={{ color: "yellow" }}>{testText}</h1> */}
      </StyledHome>
    </>
  );
};

export default Home;
