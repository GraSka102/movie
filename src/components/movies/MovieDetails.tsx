import { Card, Col, Divider, Row } from "antd";
import React, { ReactElement } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useMoviApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import { Movie } from "../types/Movie";

export default function MovieDetails(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const pathUrl = `/movie/${id}${MovieUrls.apiKey}&language=de-De&append_to_response=videos,images,credits`;
  const [movie] = useMoviApi<Movie>("get", pathUrl);

  const actors = movie?.credits.crew.filter(
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
      <Row justify="space-between" align="top">
        <Col flex={1} style={{ padding: 40 }}>
          <div>
            <img alt={movie.title} src={imgUrl} />
          </div>
        </Col>
        <Col flex={2} offset="1">
          <div className="site-card-border-less-wrapper">
            <Card title={`Filmstart: ${movie.release_date}\n`} bordered={false}>
              <p>{`Note: ${movie.vote_average}`}</p>
              <p>{`Anzahl der Bewertungen: ${movie.vote_count}`}</p>
              <p>{`Beliebtheit: ${movie.popularity}`}</p>
              <p>
                {movie.adult
                  ? `Altersfreigabe: ab 18 Jahren`
                  : `Altersfreigabe: auch für Kinder`}
              </p>
              <p>{`Sprache: ${movie.original_language}`}</p>
              <p>{movie.video ? `Als Video vorhanden` : `Keine Video`}</p>
              <p>{`Titel (Orginalsprache): ${movie.original_title}`}</p>
              <h3>Schauspielers: </h3>
              <div>
                {actors?.map((actor) => (
                  <p
                    key={actor.id}
                    onClick={() => history.push(`/actors/${actor.id}`)}
                  >
                    {actor.name}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        </Col>
        <Col span={8} flex="auto">
          <div className="site-card-border-less-wrapper">
            <Card title="Beschreibung" bordered={false}>
              <p>{movie.overview}</p>
            </Card>
          </div>
        </Col>
      </Row>
      <Divider orientation="center"></Divider>
    </>
  );
}
