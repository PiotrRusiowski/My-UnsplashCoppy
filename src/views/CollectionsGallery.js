import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, StyledSearchValue } from "../styles/globalStyledComponents";
import Navigation from "../components/galleryComponets/Navigation.js/Navigation";
import SuggestionsList from "../components/galleryComponets/Lists/SuggestionsList/SuggestionsList";
import CollectionsAndUsersList from "../components/galleryComponets/Lists/CollectionsAndUsersList/CollectionsAndUsersList";
import { getMoreCollectionsAction } from "../actions";

const CollectionsGallery = () => {
  const dispatch = useDispatch();

  const mainReducer = useSelector((state) => state.mainReducer);
  const { suggestionsTagsArray, collectionsList, showSearchValue } =
    mainReducer;
  let pageNumber = 1;
  const handleWindowScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      pageNumber += 1;
      dispatch(getMoreCollectionsAction(showSearchValue, pageNumber));
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
      <CollectionsAndUsersList list={collectionsList} />;
    </>
  );
};

export default CollectionsGallery;
