import React, { useContext } from "react";
import RootContext from "../context";

import CollectionsAndUsersList from "../components/galleryComponets/Lists/CollectionsAndUsersList/CollectionsAndUsersList";
const CollectionsGallery = () => {
  const context = useContext(RootContext);
  const { usersList } = context;
  const isUserList = true;
  return <CollectionsAndUsersList list={usersList} isUserList={isUserList} />;
};

export default CollectionsGallery;
