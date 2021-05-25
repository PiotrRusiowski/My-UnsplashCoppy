import React from "react";
import { Switch, Route } from "react-router-dom";
import MainHeader from "../components/galleryComponets/MainHeader/MainHeader";
import { routes } from "../routes";
import Home from "../views/HomeView/Home";
import PhotosGallery from "../views/PhotosGallery";
import CollectionsPhotosGallery from "../views/CollectionsPhotosGallery";
import LikesPhotosGallery from "../views/LikesPhotosGallery";
import CollectionsGallery from "../views/CollectionsGallery";
import UsersGallery from "../views/UsersGallery";
import SingleUserGallery from "../views/SingleUserGallery";
import Navigation from "../components/galleryComponets/Navigation.js/Navigation";
const Router = () => {
  return (
    <>
      <MainHeader />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.photosGallery} component={PhotosGallery} />
        <Route path={routes.usersGallery} component={UsersGallery} />
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
          exact
          path="/search/collections/:id/:searchInputValue"
          component={CollectionsPhotosGallery}
        />
        <Route
          exact
          path={routes.collectionsPhotos}
          component={SingleUserGallery}
        />
      </Switch>
    </>
  );
};

export default Router;
