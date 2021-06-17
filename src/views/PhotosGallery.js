import React from "react";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
import { useSelector } from "react-redux";
import SuggestionsList from "../components/galleryComponets/Lists/SuggestionsList/SuggestionsList";

const PhotosGallery = () => {
  const selectedPhotosList = useSelector(({ photosList }) => photosList);
  const suggestionsTagsArray = useSelector(
    ({ suggestionsTagsArray }) => suggestionsTagsArray
  );

  return (
    <>
      <GalleryHeader />
      <SuggestionsList suggestionsArray={suggestionsTagsArray} />
      <PhotosList photosList={selectedPhotosList} />
    </>
  );
};

export default PhotosGallery;
