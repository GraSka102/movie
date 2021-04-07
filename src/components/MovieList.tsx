import { Row, Space, Spin } from "antd";
import React, { ReactElement } from "react";
import { useMoviApi } from "../shared/MovieApi";
import MovieItem from "./MovieItem";
import { Movie } from "./types/Movie";

interface Props {
  movies: Movie[];
}

export function MovieList({ movies }: Props): ReactElement {
  if (!movies) {
    return <Spin />;
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
