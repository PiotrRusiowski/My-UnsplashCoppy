import React, { useContext } from "react";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
import { useSelector } from "react-redux";

const LikesPhotosGallery = () => {
  const likesPhotosList = useSelector(({ likesPhotosList }) => likesPhotosList);

  return (
    <div>
      <GalleryHeader />
      <PhotosList photosList={likesPhotosList} />;
    </div>
  );
};

export default LikesPhotosGallery;
