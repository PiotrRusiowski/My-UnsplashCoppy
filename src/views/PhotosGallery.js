import React, { useEffect, useState } from "react";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
import { useDispatch, useSelector } from "react-redux";
import SuggestionsList from "../components/galleryComponets/Lists/SuggestionsList/SuggestionsList";
import { getMorePhotosAction } from "../actions";

const PhotosGallery = () => {
  const selectedPhotosList = useSelector(({ photosList }) => photosList);
  const suggestionsTagsArray = useSelector(
    ({ suggestionsTagsArray }) => suggestionsTagsArray
  );
  const showSearchValue = useSelector(({ showSearchValue }) => showSearchValue);
  const dispatch = useDispatch();

  let pageNumber = 1;

  const handleWindowScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      pageNumber += 1;
      dispatch(getMorePhotosAction(showSearchValue, pageNumber));
      console.log("fetch");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <>
      <GalleryHeader />
      <SuggestionsList suggestionsArray={suggestionsTagsArray} />
      <PhotosList photosList={selectedPhotosList} />
    </>
  );
};

export default PhotosGallery;
