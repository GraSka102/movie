import React, { ReactElement } from "react";
import { useMoviApi } from "../shared/MovieApi";
import { MovieList } from "./MovieList";
import { Movie } from "./types/Movie";

const popularPath = `/movie/popular`;
const apiKey = `?api_key=33ac3f7294029ae5f0eb2044825a4c47`;
const queryParam = `&language=de-De&page=1`;

export default function Movies(): ReactElement {
  const pathUrl = `${popularPath}${apiKey}${queryParam}`;
  const [movies] = useMoviApi<{ results: Movie[] }>("get", pathUrl);

  if (!movies) {
    return <p>..loading</p>;
  }
  return <MovieList movies={movies?.results} />;
}
