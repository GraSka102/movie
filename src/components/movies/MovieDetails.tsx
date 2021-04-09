import { Card, Col, Divider, Row } from "antd";
import React, { ReactElement } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
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

  const onClick = () => {
    history.push(`/actors/${id}`);
  };

  console.log(actors?.length);
  actors?.forEach((actor) => console.log(actor.name));

  if (!movie) {
    return <LoadingSpinner />;
  }
  const imgUrl = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
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
        <Col flex={3} offset="2">
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
        <Col span={10} flex="auto">
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
