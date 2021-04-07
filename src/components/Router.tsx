import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Movies from "./Movies";
import MoviesSearch from "./search/MoviesSearch";

export default function Router() {
  return (
    <Switch>
      <Route path="/movies/:id">
        <MovieDetails />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/actors">Actors</Route>
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
