import { Row, Space } from "antd";
import React, { ReactElement } from "react";
import { useMoviApi } from "../shared/MovieApi";
import MovieItem from "./MovieItem";
import { Movie } from "./types/Movie";

// const popularPath = `/movie/popular`;
// const apiKey = `?api_key=33ac3f7294029ae5f0eb2044825a4c47`;
// const queryParam = `&language=de-De&page=1`;
//const path = "/discover/movie?sort_by=popularity.desc";
interface Props {
  movies: Movie[];
}

export function MovieList({ movies }: Props): ReactElement {
  if (!movies) {
    return <p>..loading</p>;
  }
  return (
    <>
      {/* Jedem Element der Reihe links/rechts, oben/unten Abstände geben */}
      <Row
        gutter={[
          { xs: 16, sm: 16, md: 24, lg: 32, xl: 32 },
          { xs: 16, sm: 16, md: 24, lg: 32, xl: 32 },
        ]}
      >
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Row>
    </>
  );
}
