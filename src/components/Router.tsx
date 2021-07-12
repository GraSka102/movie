import React, { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MovieDetails from "./movies/MovieDetails";
import Movies from "./movies/Movies";
import People from "./people/People";
import PersonDetails from "./people/PersonDetails";
import MoviesSearch from "./search/MoviesSearch";
import TvDetails from "./tv/TvDetails";
import Tvs from "./tv/Tvs";

export default function Router(): ReactElement {
  return (
    <Switch>
      <Route path="/tvs/:id">
        <TvDetails />
      </Route>
      <Route path="/tvs">
        <Tvs />
      </Route>
      <Route path="/movies/:id">
        <MovieDetails />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/actors/:id">
        <PersonDetails />
      </Route>
      <Route path="/actors">
        <People />
      </Route>
      <Route path="/home">
        <MoviesSearch />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}
