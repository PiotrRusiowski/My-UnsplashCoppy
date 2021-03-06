import React, { useContext } from "react";
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

  return (
    <StyledGalleryHeader>
      <Navigation />
      <Container xl>
        <StyledSearchValue>{showSearchValue}</StyledSearchValue>
      </Container>

      <SuggestionsList />
    </StyledGalleryHeader>
  );
};

export default GalleryHeader;
