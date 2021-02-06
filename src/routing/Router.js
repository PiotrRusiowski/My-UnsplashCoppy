import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Gallery from "../views/Gallery";
import Home from "../views/Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.photosGallery} component={Gallery} />
    </Switch>
  );
};

export default Router;
