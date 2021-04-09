import { Col, Card, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { CSSProperties, ReactElement } from "react";
import { useHistory } from "react-router";
import { Movie } from "../types/Movie";

// const baseUrl = "https://api.themoviedb.org/3";

interface Props {
  movie: Movie;
}

export default function MovieItem({ movie }: Props): ReactElement {
  // const popularPath = `/movie/popular`;
  // const apiKey = `?api_key=33ac3f7294029ae5f0eb2044825a4c47`;
  // const queryParam = `&language=de-De&page=1`;

  const history = useHistory();

  const imgUrl = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  console.log(imgUrl);
  const backdropUrl = `http://image.tmdb.org/t/p/w185/${movie.backdrop_path}`;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push(`/movies/${movie.id}`);
    return <p>clicked</p>;
  };

  return (
    <>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Card
          onClick={(e) => onClick(e)}
          hoverable
          cover={<img alt={movie.title} src={backdropUrl} />}
        >
          <Meta title={movie.title} description={movie.vote_average} />
        </Card>
      </Col>
    </>
  );
}
