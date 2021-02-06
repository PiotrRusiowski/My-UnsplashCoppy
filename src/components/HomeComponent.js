import React from "react";
import styled from "styled-components";
import backGroundPhoto from "../theme/bgcPhoto/backGround.jpg";
import Search from "./Search";
import { Container } from "../globalStyledComponents";

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
  /* background-color: cadetblue; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: left;

  /* margin-top: auto; */
  /* margin-bottom: auto; */
`;
const StyledContent = styled.div`
  height: 45%;
  /* background-color: grey; */
  display: flex;
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  margin-top: auto;
`;

const HomeComponent = () => {
  return (
    <>
      <StyledHome>
        <Container>
          <HomeWrapper>
            <StyledContent>
              <StyledTitle>Unsplash</StyledTitle>
              <h4>
                The internet’s source of freely-usable images.
                <br /> Powered by creators everywhere.
              </h4>
            </StyledContent>
            <Search />
          </HomeWrapper>
        </Container>
      </StyledHome>
    </>
  );
};

export default HomeComponent;
