import React, { useContext, useEffect } from "react";
import RootContext from "../context";

import CollectionsAndUsersList from "../components/galleryComponets/Lists/CollectionsAndUsersList/CollectionsAndUsersList";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
const CollectionsGallery = () => {
  const context = useContext(RootContext);
  const { usersList } = context;
  const isUserList = true;

  return (
    <>
      <GalleryHeader />
      <CollectionsAndUsersList list={usersList} isUserList={isUserList} />
    </>
  );
};

export default CollectionsGallery;
