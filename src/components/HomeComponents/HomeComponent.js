import React from "react";
import Search from "../Search/Search";
import { Container } from "../../styles/globalStyledComponents";
import {
  StyledHome,
  StyledContent,
  HomeWrapper,
  StyledTitle,
} from "./HomeComoponetStyledsComponents";

const HomeComponent = () => {
  return (
    <>
      <StyledHome>
        <Container>
          <HomeWrapper>
            <StyledContent>
              <StyledTitle>Unsplash</StyledTitle>
              <p>
                The internet’s source of freely-usable images.
                <br /> Powered by creators everywhere.
              </p>
            </StyledContent>
            <Search />
          </HomeWrapper>
        </Container>
      </StyledHome>
    </>
  );
};

export default HomeComponent;
