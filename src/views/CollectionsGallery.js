import React, { useContext } from "react";
import RootContext from "../context";

import CollectionsAndUsersList from "../components/galleryComponets/Lists/CollectionsList/CollectionsAndUsersList";
const CollectionsGallery = () => {
  const context = useContext(RootContext);
  const { collectionsList } = context;
  return <CollectionsAndUsersList list={collectionsList} />;
};

export default CollectionsGallery;
