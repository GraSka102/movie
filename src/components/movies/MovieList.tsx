import { Row } from "antd";
import React, { ReactElement } from "react";
import { Movie } from "../types/Movie";
import MovieItem from "./MovieListItem";

interface Props {
  movies: Movie[];
}

export function MovieList({ movies }: Props): ReactElement {
  return (
    <>
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
