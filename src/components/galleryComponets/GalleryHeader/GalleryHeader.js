import React, { useContext } from "react";
import { Container } from "../../../styles/globalStyledComponents";
import RootContext from "../../../context";
import SuggestionsList from "../Lists/SuggestionsList/SuggestionsList";
import Search from "../../Search/Search";
import logo from "../../../theme/logo.svg";
import { routes } from "../../../routes";
import {
  StyledGalleryHeader,
  StyledSearchValue,
  StyledLogo,
  StyledMainHeader,
  StyledSearchWrapper,
} from "./GalleryHeaderStyledComponents";
import Navigation from "../Navigation.js/Navigation";
import { Link } from "react-router-dom";
const GalleryHeader = () => {
  const context = useContext(RootContext);
  const { showSearchValue } = context;
  const gallery = true;
  return (
    <Container xl>
      <StyledGalleryHeader>
        <StyledMainHeader>
          <Link to={routes.home}>
            <StyledLogo src={logo} alt="React Logo" />
          </Link>

          <StyledSearchWrapper>
            <Search gallery={gallery} />
          </StyledSearchWrapper>
        </StyledMainHeader>
        <Navigation />
        <StyledSearchValue>{showSearchValue}</StyledSearchValue>
      </StyledGalleryHeader>
      <SuggestionsList />
    </Container>
  );
};

export default GalleryHeader;
