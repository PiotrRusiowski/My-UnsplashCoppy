import React, { useContext } from "react";
import RootContext from "../../context";
import { connect, useDispatch, useSelector } from "react-redux";
import Search from "../../components/Search/Search";
import { Container } from "../../styles/globalStyledComponents";
import {
  StyledHome,
  StyledContent,
  HomeWrapper,
  StyledTitle,
  StyledLink,
} from "./HomeStyledsComponents";
import { getData, getPhotos, sayHelloAfterTime } from "../../actions";

const Home = ({ showTest, changeTest }) => {
  const context = useContext(RootContext);
  const { homeImg } = context;

  const dispatch = useDispatch();

  const getTest = async () => {};

  const testText = useSelector((state) => state.testText);

  return (
    <>
      <StyledHome img={homeImg}>
        <Container>
          <HomeWrapper>
            <StyledContent>
              <StyledTitle>Unsplash</StyledTitle>
              <p>
                The internet’s source of{" "}
                <StyledLink href="https://unsplash.com/license">
                  freely-usable images.
                </StyledLink>
                <br /> Powered by creators everywhere.
              </p>
            </StyledContent>
            <Search pageType="home" />
          </HomeWrapper>
        </Container>
        {/* <button onClick={() => dispatch(getData())}>get photos</button>
        <button onClick={() => dispatch(sayHelloAfterTime())}>Say hello</button>
        <h1 style={{ color: "yellow" }}>{testText}</h1> */}
      </StyledHome>
    </>
  );
};

export default Home;
