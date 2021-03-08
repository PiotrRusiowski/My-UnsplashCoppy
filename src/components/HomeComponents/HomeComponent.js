import React, { useContext } from "react";
import RootContext from "../../context";
import { connect } from "react-redux";
import Search from "../Search/Search";
import { Container } from "../../styles/globalStyledComponents";
import {
  StyledHome,
  StyledContent,
  HomeWrapper,
  StyledTitle,
} from "./HomeComoponetStyledsComponents";

const HomeComponent = ({ showTest, changeTest }) => {
  const context = useContext(RootContext);
  const { homeImg } = context;
  return (
    <>
      <StyledHome img={homeImg}>
        <Container>
          <h1>{showTest}</h1>
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
        <button onClick={() => changeTest("chuj")}>test</button>
      </StyledHome>
    </>
  );
};

export default HomeComponent;
