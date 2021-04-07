import React, { ReactElement } from "react";
import { useMoviApi } from "../shared/MovieApi";
import { LoadingSpinner } from "./LoadingSpinner";
import { MovieList } from "./MovieList";
import { Movie } from "./types/Movie";
import { MovieUrls } from "../shared/utils";

export default function Movies(): ReactElement {
  // const pathUrl = `/movie/top_rated${MovieUrls.apiKey}&language=de-De`;
  // const pathUrl = `/movie/now_playing${MovieUrls.apiKey}&language=de-De&page=1`;
  const pathUrl = `/movie/popular${MovieUrls.apiKey}&language=de-De`;

  const [movies] = useMoviApi<{ results: Movie[] }>("get", pathUrl);

  if (!movies) {
    return <LoadingSpinner />;
  }
  return <MovieList movies={movies?.results} />;
}
