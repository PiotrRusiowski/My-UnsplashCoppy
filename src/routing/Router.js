import React from "react";
import { Switch, Route } from "react-router-dom";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
import CollectionsList from "../components/galleryComponets/Lists/CollectionsList/CollectionsAndUsersList";
import LikesList from "../components/galleryComponets/Lists/LikesList/LikesList";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import UsersList from "../components/galleryComponets/Lists/UsersList/UsersList";
import { routes } from "../routes";
import Home from "../views/Home";
import PhotosGallery from "../views/PhotosGallery";
import CollectionsPhotosGallery from "../views/CollectionsPhotosGallery";
import LikesPhotosGallery from "../views/LikesPhotosGallery";
import CollectionsGallery from "../views/CollectionsGallery";
import UsersGallery from "../views/UsersGallery";

const Router = () => {
  return (
    <>
      <GalleryHeader />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.photosGallery} component={PhotosGallery} />
        <Route exact path={routes.usersGallery} component={UsersGallery} />
        <Route
          exact
          path={routes.likesPhotosGallery}
          component={LikesPhotosGallery}
        />
        <Route
          exact
          path={routes.collectionsGallery}
          component={CollectionsGallery}
        />
        <Route
          path={routes.collectionsPhotos}
          component={CollectionsPhotosGallery}
        />
      </Switch>
    </>
  );
};

export default Router;
