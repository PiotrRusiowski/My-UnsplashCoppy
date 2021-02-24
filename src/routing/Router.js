import React from "react";
import { Switch, Route } from "react-router-dom";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
import { routes } from "../routes";
import Home from "../views/Home";
import PhotosGallery from "../views/PhotosGallery";
import CollectionsPhotosGallery from "../views/CollectionsPhotosGallery";
import LikesPhotosGallery from "../views/LikesPhotosGallery";
import CollectionsGallery from "../views/CollectionsGallery";
import UsersGallery from "../views/UsersGallery";
import SingleUserGallery from "../views/SingleUserGallery";
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
        <Route //dlaczego nie działają w odwrotnej kolejnośći z collecionsPhotos????????????????
          exact
          path={routes.singleUserGallery}
          component={SingleUserGallery}
        />
        <Route
          exact
          path={routes.collectionsPhotos}
          component={CollectionsPhotosGallery}
        />
      </Switch>
    </>
  );
};

export default Router;
