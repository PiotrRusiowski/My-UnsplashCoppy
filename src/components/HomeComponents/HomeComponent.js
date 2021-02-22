import React, { useContext } from "react";
import RootContext from "../../context";

import Search from "../Search/Search";
import { Container } from "../../styles/globalStyledComponents";
import {
  StyledHome,
  StyledContent,
  HomeWrapper,
  StyledTitle,
} from "./HomeComoponetStyledsComponents";

const HomeComponent = () => {
  const context = useContext(RootContext);
  const { homeImg } = context;
  return (
    <>
      <StyledHome>
        <Container img={homeImg}>
          <HomeWrapper>
            <StyledContent>
              <StyledTitle>Unsplash</StyledTitle>
              <p>
                The internet’s source of freely-usable images.
                <br /> Powered by creators everywhere.
              </p>
            </StyledContent>
            <Search pageType="home" />
          </HomeWrapper>
        </Container>
      </StyledHome>
    </>
  );
};

export default HomeComponent;
