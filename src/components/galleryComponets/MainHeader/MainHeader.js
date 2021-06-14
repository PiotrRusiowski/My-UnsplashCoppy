import React from "react";
import { Container } from "../../../styles/globalStyledComponents";
import HeaderSearch from "../../Search/HeaderSearch/HeaderSearch";
import logo from "../../../assets/logo.svg";
import { routes } from "../../../routes";
import {
  StyledLogo,
  StyledMainHeader,
  StyledSearchWrapper,
} from "./MainHeaderStyledComponents";
import { Link } from "react-router-dom";
import { searchTypes } from "../../../utils/searchTypes";
import { useDispatch } from "react-redux";
import { setActiveSearchType } from "../../../actions";
const MainHeader = () => {
  const gallery = true;
  const dispatch = useDispatch();
  return (
    <Container xl>
      <StyledMainHeader>
        <Link
          to={routes.home}
          onClick={() => {
            dispatch(setActiveSearchType(searchTypes.photos));
          }}
        >
          <StyledLogo src={logo} alt="Unsplash logo" />
        </Link>

        <StyledSearchWrapper>
          <HeaderSearch gallery={gallery} />
        </StyledSearchWrapper>
      </StyledMainHeader>
    </Container>
  );
};

export default MainHeader;
