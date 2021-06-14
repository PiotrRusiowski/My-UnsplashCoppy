import React, { useContext } from "react";
import RootContext from "../context";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import { useSelector } from "react-redux";

const CollectionsPhotosList = () => {
  const singleCollectionPhotos = useSelector(
    ({ singleCollectionPhotos }) => singleCollectionPhotos
  );
  return <PhotosList photosList={singleCollectionPhotos} />;
};

export default CollectionsPhotosList;
