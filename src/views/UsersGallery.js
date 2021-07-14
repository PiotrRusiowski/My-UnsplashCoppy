import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CollectionsAndUsersList from "../components/galleryComponets/Lists/CollectionsAndUsersList/CollectionsAndUsersList";
import { Container, StyledSearchValue } from "../styles/globalStyledComponents";
import Navigation from "../components/galleryComponets/Navigation.js/Navigation";
import { getMoreUsersAction } from "../actions";
const CollectionsGallery = () => {
  const mainReducer = useSelector((state) => state.mainReducer);
  const { usersList, showSearchValue } = mainReducer;
  const isUserList = true;
  const dispatch = useDispatch();
  let pageNumber = 1;
  const handleWindowScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      pageNumber += 1;
      dispatch(getMoreUsersAction(showSearchValue, pageNumber));
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
      <CollectionsAndUsersList list={usersList} isUserList={isUserList} />
    </>
  );
};

export default CollectionsGallery;
