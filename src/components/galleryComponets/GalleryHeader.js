import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "../../globalStyledComponents";
import PhotosList from "./PhotosList";
import RootContext from "../../context";
import SuggestionsList from "./SuggestionsList";

const StyledSearchValue = styled.h1``;
const GalleryHeader = () => {
  const context = useContext(RootContext);
  const { showSearchValue } = context;
  return (
    <Container xl>
      <SuggestionsList />
      <StyledSearchValue>{showSearchValue}</StyledSearchValue>
    </Container>
  );
};

export default GalleryHeader;
