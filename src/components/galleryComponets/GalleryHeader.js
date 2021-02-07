import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "../../styles/globalStyledComponents";
import RootContext from "../../context";
import SuggestionsList from "./SuggestionsList";
const StyledGalleryHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledSearchValue = styled.h1`
  margin-right: auto;
  font-size: 46px;
  padding-bottom: 15px;
`;

const GalleryHeader = () => {
  const context = useContext(RootContext);
  const { showSearchValue } = context;
  return (
    <Container xl>
      <StyledGalleryHeader>
        <StyledSearchValue>{showSearchValue}</StyledSearchValue>
        <SuggestionsList />
      </StyledGalleryHeader>
    </Container>
  );
};

export default GalleryHeader;
