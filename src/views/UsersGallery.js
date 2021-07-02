import React from "react";
import { useSelector } from "react-redux";
import CollectionsAndUsersList from "../components/galleryComponets/Lists/CollectionsAndUsersList/CollectionsAndUsersList";
import { Container, StyledSearchValue } from "../styles/globalStyledComponents";
import Navigation from "../components/galleryComponets/Navigation.js/Navigation";
const CollectionsGallery = () => {
  const mainReducer = useSelector((state) => state.mainReducer);
  const { usersList, showSearchValue } = mainReducer;
  const isUserList = true;

  return (
    <>
      <Navigation />
      <Container xl>
        <StyledSearchValue>{showSearchValue}</StyledSearchValue>
      </Container>
      <CollectionsAndUsersList list={usersList} isUserList={isUserList} />
    </>
  );
};

export default CollectionsGallery;
