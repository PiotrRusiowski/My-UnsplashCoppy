import React, { useContext } from "react";
import { useSelector } from "react-redux";
import RootContext from "../../../context";
import { Container } from "../../../styles/globalStyledComponents";
import SuggestionsList from "../Lists/SuggestionsList/SuggestionsList";
import Navigation from "../Navigation.js/Navigation";
import {
  StyledGalleryHeader,
  StyledSearchValue,
} from "./GalleryHeaderStyledComponents";

const GalleryHeader = () => {
  const context = useContext(RootContext);
  const { showSearchValue } = context;

  const suggestionsTagsArray = useSelector(
    (state) => state.suggestionsTagsArray
  );
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
