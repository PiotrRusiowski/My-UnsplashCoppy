import React, { useEffect } from "react";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import { useDispatch, useSelector } from "react-redux";
import SuggestionsList from "../components/galleryComponets/Lists/SuggestionsList/SuggestionsList";
import { getMorePhotosAction } from "../actions";
import { Container, StyledSearchValue } from "../styles/globalStyledComponents";
import Navigation from "../components/galleryComponets/Navigation.js/Navigation";

const PhotosGallery = () => {
  const mainReducer = useSelector((state) => state.mainReducer);
  const { suggestionsTagsArray, photosList, showSearchValue } = mainReducer;
  const dispatch = useDispatch();
  let pageNumber = 1;
  const handleWindowScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      pageNumber += 1;
      dispatch(getMorePhotosAction(showSearchValue, pageNumber));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Container xl>
        <StyledSearchValue>{showSearchValue}</StyledSearchValue>
      </Container>
      <SuggestionsList suggestionsArray={suggestionsTagsArray} />
      <PhotosList photosList={photosList} />
    </>
  );
};

export default PhotosGallery;
