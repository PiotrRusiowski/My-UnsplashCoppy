import React from "react";
import { exampleSuggestionsArray } from "../../loclalData/localData";
import { useSelector } from "react-redux";
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

const Home = () => {
  const main = true;
  const homeImg = useSelector(({ randomPhoto }) => randomPhoto);

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
      </StyledHome>
    </>
  );
};

export default Home;
