import React, { useContext } from "react";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
import { useSelector } from "react-redux";
import { Container } from "../styles/globalStyledComponents";

const PhotosGallery = () => {
  const selectedPhotosList = useSelector(({ photosList }) => photosList);
  return (
    <>
      <GalleryHeader />
      <Container xl>
        {" "}
        <PhotosList photosList={selectedPhotosList} />
      </Container>
    </>
  );
};

export default PhotosGallery;
