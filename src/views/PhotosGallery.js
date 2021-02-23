import React, { useContext } from "react";
import RootContext from "../context";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";

const PhotosGallery = () => {
  const context = useContext(RootContext);
  const { photosList } = context;
  return (
    <div>
      <PhotosList photosList={photosList} />
    </div>
  );
};

export default PhotosGallery;
