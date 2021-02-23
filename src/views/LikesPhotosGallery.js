import React, { useContext } from "react";
import RootContext from "../context";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";

const LikesPhotosGallery = () => {
  const context = useContext(RootContext);
  const { likePhotosList } = context;
  return (
    <div>
      <PhotosList photosList={likePhotosList} />;
    </div>
  );
};

export default LikesPhotosGallery;
