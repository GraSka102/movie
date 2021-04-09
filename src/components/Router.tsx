import React, { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./movies/MovieDetails";
import Movies from "./movies/Movies";
import People from "./people/People";
import PersonDetails from "./people/PersonDetails";
import MoviesSearch from "./search/MoviesSearch";

export default function Router(): ReactElement {
  return (
    <Switch>
      <Route path="/movies/:id">
        <MovieDetails />
      </Route>
      <Route path="/movies">
        Filme:
        <Movies />
      </Route>
      <Route path="/actors/:id">
        <PersonDetails />
      </Route>
      <Route path="/actors">
        Schauspieler:
        <People />
      </Route>
      <Route path="/home">
        <Home />
        <MoviesSearch />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}
