import React from "react";
import styled from "styled-components";
import { Container } from "../../globalStyledComponents";
import Search from "../Search";
import GalleryHeader from "./GalleryHeader";
import PhotosList from "./PhotosList";

const StyledGallery = styled.div``;

const GalleryComponet = () => {
  const gallery = true;
  return (
    <div>
      <Container>
        <Search gallery={gallery} />
      </Container>
      <GalleryHeader />
      <PhotosList />
    </div>
  );
};

export default GalleryComponet;
