import React, { useContext } from "react";
import RootContext from "../context";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";

const PhotosGallery = () => {
  const context = useContext(RootContext);
  const { photosList } = context;
  return (
    <>
      <GalleryHeader />
      <PhotosList photosList={photosList} />
    </>
  );
};

export default PhotosGallery;
