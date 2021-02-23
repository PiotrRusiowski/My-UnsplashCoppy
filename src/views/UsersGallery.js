import React, { useContext } from "react";
import RootContext from "../context";

import CollectionsAndUsersList from "../components/galleryComponets/Lists/CollectionsList/CollectionsAndUsersList";
const CollectionsGallery = () => {
  const context = useContext(RootContext);
  const { usersList } = context;
  const user = true;
  return <CollectionsAndUsersList list={usersList} user={user} />;
};

export default CollectionsGallery;
