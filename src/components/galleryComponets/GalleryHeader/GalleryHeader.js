import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../../styles/globalStyledComponents";
import Navigation from "../Navigation.js/Navigation";
import {
  StyledGalleryHeader,
  StyledSearchValue,
} from "./GalleryHeaderStyledComponents";

const GalleryHeader = () => {
  const showSearchValue = useSelector(
    (state) => state.mainReducer.showSearchValue
  );
  return (
    <StyledGalleryHeader>
      <Navigation />
      <Container xl>
        <StyledSearchValue>{showSearchValue}</StyledSearchValue>
      </Container>
    </StyledGalleryHeader>
  );
};

export default GalleryHeader;
