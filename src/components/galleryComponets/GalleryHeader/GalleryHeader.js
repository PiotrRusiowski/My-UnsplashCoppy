import React, { useContext } from "react";
import { Container } from "../../../styles/globalStyledComponents";
import RootContext from "../../../context";
import SuggestionsList from "../Lists/SuggestionsList/SuggestionsList";
import Search from "../../Search/Search";
import {
  StyledGalleryHeader,
  StyledSearchValue,
} from "./GalleryHeaderStyledComponents";
import Navigation from "../Navigation.js/Navigation";
const GalleryHeader = () => {
  const context = useContext(RootContext);
  const { showSearchValue } = context;
  const gallery = true;
  return (
    <Container xl>
      <StyledGalleryHeader>
        <Search gallery={gallery} />
        <Navigation />
        <StyledSearchValue>{showSearchValue}</StyledSearchValue>
        <SuggestionsList />
      </StyledGalleryHeader>
    </Container>
  );
};

export default GalleryHeader;
