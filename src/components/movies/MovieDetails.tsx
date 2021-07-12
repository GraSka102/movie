import React, { ReactElement } from "react";
import { Card, Col, Divider, Row } from "antd";
import { useParams } from "react-router-dom";
import { useMovieApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import { Movie } from "../types/Movie";

import MovieCastList from "./MovieCastList";

export default function MovieDetails(): ReactElement {
  const { id } = useParams<{ id: string }>();

  const moviePathUrl = `/movie/${id}${MovieUrls.apiKey}&language=de-De&append_to_response=videos,images,credits`;
  const [movie] = useMovieApi<Movie>("get", moviePathUrl);

  const actors = movie?.credits.cast.filter(
    (person) => person.known_for_department === "Acting"
  );

  if (!movie) {
    return <LoadingSpinner />;
  }
  const imgUrl = `${MovieUrls.imgBaseUrl}${movie.poster_path}`;

  return (
    <>
      <Divider orientation="center">
        <h1>{movie.title}</h1>
      </Divider>
      <Row>
        <Col
          className="gutter-row"
          xs={32}
          sm={24}
          md={12}
          lg={12}
          xl={6}
          xxl={4}
        >
          <Card bordered={false}>
            <img alt={movie.title} src={imgUrl} />
          </Card>
        </Col>
        <Col xs={32} sm={24} md={12} lg={12} xl={6} xxl={4}>
          <Card title={`Filmstart: ${movie.release_date}\n`} bordered={false}>
            <p>
              {movie.adult
                ? `Altersfreigabe: ab 18 Jahren`
                : `Altersfreigabe: alle`}
            </p>
            <p>{`Sprache: ${movie.original_language}`}</p>
            <p>{movie.video ? `Als Video vorhanden` : `Keine Video`}</p>
            <p>{`Titel (Orginalsprache): ${movie.original_title}`}</p>
          </Card>
        </Col>

        <Col xs={32} sm={24} md={12} lg={12} xl={6}>
          <Card title="Beschreibung" bordered={false}>
            <p>{movie.overview}</p>
          </Card>
        </Col>
        <Col xs={32} sm={24} md={12} lg={12} xl={6}>
          <Card title={`Darsteller:\n`} bordered={false}>
            <MovieCastList actors={actors} />
          </Card>
        </Col>
      </Row>
      <Divider orientation="center"></Divider>
    </>
  );
}
