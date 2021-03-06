import React, { useContext } from "react";
import RootContext from "../context";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";

const LikesPhotosGallery = () => {
  const context = useContext(RootContext);
  const { likePhotosList } = context;
  return (
    <div>
      <GalleryHeader />
      <PhotosList photosList={likePhotosList} />;
    </div>
  );
};

export default LikesPhotosGallery;
