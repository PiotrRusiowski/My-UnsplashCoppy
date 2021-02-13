import React from "react";
import { Switch, Route } from "react-router-dom";
import GalleryHeader from "../components/galleryComponets/GalleryHeader/GalleryHeader";
import CollectionsList from "../components/galleryComponets/Lists/CollectionsList/CollectionsList";
import UsersList from "../components/galleryComponets/Lists/UsersList/UsersList";
import { routes } from "../routes";
import Gallery from "../views/Gallery";
import Home from "../views/Home";

const Router = () => {
  return (
    <>
      <GalleryHeader />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.photosGallery} component={Gallery} />
        <Route exact path={routes.usersGallery} component={UsersList} />
        <Route
          exact
          path={routes.collectionsGallery}
          component={CollectionsList}
        />
      </Switch>
    </>
  );
};

export default Router;
