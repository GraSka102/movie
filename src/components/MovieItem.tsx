import { Col, Card, Space } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { CSSProperties, ReactElement } from "react";
import { useHistory } from "react-router";
import { Movie } from "./types/Movie";

const baseUrl = "https://api.themoviedb.org/3";

//https://api.themoviedb.org/3/movie/157336?api_key={api_key}

interface Props {
  movie: Movie;
}

export default function MovieItem({ movie }: Props): ReactElement {
  const popularPath = `/movie/popular`;
  const apiKey = `?api_key=33ac3f7294029ae5f0eb2044825a4c47`;
  const queryParam = `&language=de-De&page=1`;
  // const imagesUrl = `/movie/{movie_id}/images`;
  const history = useHistory();

  const imgUrl = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  console.log(imgUrl);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("clicked" + movie.id);
    history.push(`/movies/${movie.id}`);
    return <p>clicked</p>;
  };

  return (
    <>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Card
          onClick={(e) => onClick(e)}
          hoverable
          // hier keine feste Breite nutzen
          // style={{ width: 240 }}
          cover={<img alt={movie.title} src={imgUrl} />}
        >
          <Meta title={movie.title} description={movie.vote_average} />
        </Card>
      </Col>
    </>
  );
}
