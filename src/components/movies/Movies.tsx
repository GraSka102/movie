import React, { ReactElement } from "react";
import { useMoviApi } from "../../shared/MovieApi";
import { LoadingSpinner } from "../LoadingSpinner";
import { MovieList } from "./MovieList";
import { Movie } from "../types/Movie";
import { MovieUrls } from "../../shared/utils";

export default function Movies(): ReactElement {
  const pathUrl = `/movie/popular${MovieUrls.apiKey}${MovieUrls.queryParam}`;
  const [movies] = useMoviApi<{ results: Movie[] }>("get", pathUrl);

  if (!movies) {
    return <LoadingSpinner />;
  }
  return <MovieList movies={movies?.results} />;
}
