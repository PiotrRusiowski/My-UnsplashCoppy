import React, { useContext } from "react";
import RootContext from "../context";

import CollectionsAndUsersList from "../components/galleryComponets/Lists/CollectionsAndUsersList/CollectionsAndUsersList";
import Home from "./Home";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
const CollectionsGallery = () => {
  const context = useContext(RootContext);
  const { collectionsList } = context;

  return (
    <>
      <GalleryHeader />
      <CollectionsAndUsersList list={collectionsList} />;
    </>
  );
};

export default CollectionsGallery;
