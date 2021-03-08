import React, { useContext } from "react";
import RootContext from "../context";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import UserInfoCard from "../components/galleryComponets/Cards/UserCard/UserInfoCard/UserInfoCard";
import { Container } from "../styles/globalStyledComponents";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
import { useSelector } from "react-redux";
import Navigation from "../components/galleryComponets/Navigation.js/Navigation";

const SingleUserGallery = () => {
  const selectedSingleUserPhotos = useSelector(
    ({ singleUserPhotos }) => singleUserPhotos
  );

  return (
    <div>
      <Container>
        <UserInfoCard />
      </Container>
      <Navigation />
      <PhotosList photosList={selectedSingleUserPhotos} />
    </div>
  );
};

export default SingleUserGallery;
