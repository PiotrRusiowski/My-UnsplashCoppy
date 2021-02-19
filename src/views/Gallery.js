import React, { useContext } from "react";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
import CollectionsList from "../components/galleryComponets/Lists/CollectionsList/CollectionsList";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import UsersList from "../components/galleryComponets/Lists/UsersList/UsersList";
import RootContext from "../context";
import { searchTypes } from "../utils/searchTypes";

//Search View Manager
const Gallery = () => {
  const context = useContext(RootContext);
  const { activeSearchType } = context;

  return (
    <>
      {/* {activeSearchType === searchTypes.photos ? (
        <PhotosList />
      ) : activeSearchType === searchTypes.collections ? (
        <CollectionsList />
      ) : (
        <UsersList />
      )} */}
    </>
  );
};

export default Gallery;
