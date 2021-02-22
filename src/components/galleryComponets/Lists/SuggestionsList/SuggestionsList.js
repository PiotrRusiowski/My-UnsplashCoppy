import React, { useContext } from "react";
import RootContext from "../../../../context";
import { Link } from "react-router-dom";
import {
  StyledSugestBtn,
  StyledCarouselBtn,
  StyledCarouselBtnGroup,
  StyledSuggestionsList,
} from "./SuggestionsListStyledComponents.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,

    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <StyledCarouselBtnGroup>
      <StyledCarouselBtn
        left
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
        style={{ left: "30px" }}
      >
        <ArrowBackIosIcon fontSize="inherit" />
      </StyledCarouselBtn>
      <StyledCarouselBtn
        right
        style={{ right: "-30px" }}
        onClick={() => next()}
      >
        <ArrowForwardIosIcon color="inherit" fontSize="inherit" />
      </StyledCarouselBtn>
    </StyledCarouselBtnGroup>
  );
};

const SuggestionsList = () => {
  const context = useContext(RootContext);
  const {
    suggestionsArray,
    activeSearchType,
    getPhotosCollectionsAndUserFromApi,
    getCollectionsFromApiSuggestList,
    getPhotos,
    getCollectionsFromApi,
  } = context;

  return (
    <StyledSuggestionsList>
      <Carousel
        responsive={responsive}
        ssr={true}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        centerMode={true}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      >
        {suggestionsArray.map((suggest, index) => (
          <>
            <Link to={`/search/${activeSearchType}/${suggest}`}>
              <li
                key={`${index}${suggest}`}
                onClick={(e) => {
                  getPhotos(e);
                  getCollectionsFromApiSuggestList(suggest);
                }}
              >
                <StyledSugestBtn>{suggest}</StyledSugestBtn>
              </li>
            </Link>
          </>
        ))}
      </Carousel>
    </StyledSuggestionsList>
  );
};

export default SuggestionsList;
