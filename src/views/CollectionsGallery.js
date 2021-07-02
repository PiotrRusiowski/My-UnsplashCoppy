import React from "react";
import { useSelector } from "react-redux";
import { Container, StyledSearchValue } from "../styles/globalStyledComponents";
import Navigation from "../components/galleryComponets/Navigation.js/Navigation";
import SuggestionsList from "../components/galleryComponets/Lists/SuggestionsList/SuggestionsList";
import CollectionsAndUsersList from "../components/galleryComponets/Lists/CollectionsAndUsersList/CollectionsAndUsersList";
const CollectionsGallery = () => {
  const mainReducer = useSelector((state) => state.mainReducer);
  const { suggestionsTagsArray, collectionsList, showSearchValue } =
    mainReducer;

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
