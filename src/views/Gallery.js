import React from "react";
import { Container } from "../styles/globalStyledComponents";
import Search from "../components/Search";
import GalleryHeader from "../components/galleryComponets/GalleryHeader";
import PhotosList from "../components/galleryComponets/PhotosList";
const Gallery = () => {
  const gallery = true;
  return (
    <>
      <Container>
        <Search gallery={gallery} />
      </Container>
      <GalleryHeader />
      <PhotosList />
    </>
  );
};

export default Gallery;
