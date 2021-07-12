import React, { ReactElement } from "react";
import { MovieList } from "../movies/MovieList";
import { Movie } from "../types/Movie";

interface Props {
  isPopupOpen: boolean;
  foundMovies: Movie[] | undefined;
}

export default function Popup({ isPopupOpen, foundMovies }: Props): any {
  if (!isPopupOpen) {
    return null;
  }
  if (!foundMovies) {
    return <div className="warning">Kein Film gefunden!!!</div>;
  }
  return <MovieList movies={foundMovies} />;
}
