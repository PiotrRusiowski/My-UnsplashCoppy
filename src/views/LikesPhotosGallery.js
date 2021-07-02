import React from "react";
import Navigation from "../components/galleryComponets/Navigation.js/Navigation";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import { useSelector } from "react-redux";

const LikesPhotosGallery = () => {
  const likesPhotosList = useSelector(
    (state) => state.supportReducer.likesPhotosList
  );

  return (
    <>
      <Navigation />
      <PhotosList photosList={likesPhotosList} />;
    </>
  );
};

export default LikesPhotosGallery;
