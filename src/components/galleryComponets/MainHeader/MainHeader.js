import React, { useContext } from "react";
import { Container } from "../../../styles/globalStyledComponents";
import RootContext from "../../../context";
import SuggestionsList from "../Lists/SuggestionsList/SuggestionsList";
import Search from "../../Search/Search";
import logo from "../../../assets/logo.svg";
import { routes } from "../../../routes";
import {
  StyledGalleryHeader,
  StyledSearchValue,
  StyledLogo,
  StyledMainHeader,
  StyledSearchWrapper,
} from "./MainHeaderStyledComponents";
import { Link } from "react-router-dom";
import { searchTypes } from "../../../utils/searchTypes";
const MainHeader = () => {
  const context = useContext(RootContext);
  const { showSearchValue, handleSetActiveSearchType } = context;
  const gallery = true;
  return (
    <Container xl>
      <StyledMainHeader>
        <Link
          to={routes.home}
          onClick={() => {
            handleSetActiveSearchType(searchTypes.photos);
          }}
        >
          <StyledLogo src={logo} alt="Unsplash logo" />
        </Link>

        <StyledSearchWrapper>
          <Search gallery={gallery} />
        </StyledSearchWrapper>
      </StyledMainHeader>
    </Container>
  );
};

export default MainHeader;
