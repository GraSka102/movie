import { Card, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import { MovieUrls } from "../../shared/utils";
import { Movie } from "../types/Movie";

interface Props {
  movie: Movie;
}

export default function MovieItem({ movie }: Props): ReactElement {
  const history = useHistory();

  const backdropUrl = `${MovieUrls.imgBaseUrl}${movie.backdrop_path}`;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push(`/movies/${movie.id}`);
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
