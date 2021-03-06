import React, { useContext } from "react";
import RootContext from "../context";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import UserInfoCard from "../components/galleryComponets/Cards/UserCard/UserInfoCard/UserInfoCard";
import { Container } from "../styles/globalStyledComponents";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";

const SingleUserGallery = () => {
  const context = useContext(RootContext);
  const { singleUserPhotos } = context;

  return (
    <div>
      <GalleryHeader />
      <Container>
        <UserInfoCard />
      </Container>
      <PhotosList photosList={singleUserPhotos} />
    </div>
  );
};

export default SingleUserGallery;
