import React, { useContext } from "react";
import RootContext from "../context";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";

const CollectionsPhotosList = () => {
  const context = useContext(RootContext);
  const { selectedCollectionList } = context;
  return <PhotosList photosList={selectedCollectionList} />;
};

export default CollectionsPhotosList;
