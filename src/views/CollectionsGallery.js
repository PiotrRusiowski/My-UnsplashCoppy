import React from "react";
import { useSelector } from "react-redux";

import CollectionsAndUsersList from "../components/galleryComponets/Lists/CollectionsAndUsersList/CollectionsAndUsersList";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
const CollectionsGallery = () => {
  const collectionsList = useSelector(
    (state) => state.mainReducer.collectionsList
  );

  return (
    <>
      <GalleryHeader />
      <CollectionsAndUsersList list={collectionsList} />;
    </>
  );
};

export default CollectionsGallery;
