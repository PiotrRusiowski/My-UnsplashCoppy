import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../../styles/globalStyledComponents";
import SuggestionsList from "../Lists/SuggestionsList/SuggestionsList";
import Navigation from "../Navigation.js/Navigation";
import {
  StyledGalleryHeader,
  StyledSearchValue,
} from "./GalleryHeaderStyledComponents";

const GalleryHeader = () => {
  const state = useSelector((state) => state);
  const { showSearchValue, suggestionsTagsArray } = state;
  const main = false;
  return (
    <StyledGalleryHeader>
      <Navigation />
      <Container xl>
        <StyledSearchValue>{showSearchValue}</StyledSearchValue>
      </Container>

      <SuggestionsList suggestionsArray={suggestionsTagsArray} main={main} />
    </StyledGalleryHeader>
  );
};

export default GalleryHeader;
