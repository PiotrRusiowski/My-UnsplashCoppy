import React from "react";
import styled from "styled-components";
import backGroundPhoto from "../theme/bgcPhoto/backGround.jpg";
import Search from "./Search";
import { Container } from "../styles/globalStyledComponents";

const StyledHome = styled.div`
  height: 85vh;
  position: relative;
  padding: 15px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  &:after {
    background-image: url(${backGroundPhoto});
    background-position: center;
    background-size: cover;
    background-position: center;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const StyledContent = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
`;
const StyledTitle = styled.h1`
  margin-top: 100px;
  margin-bottom: 15px;
  font-size: 46px;
`;

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
