import { Avatar, Card, Carousel, Col, Divider, List, Row } from "antd";
import React, { ReactElement } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useMovieApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import { Movie } from "../types/Movie";

export default function MovieDetails(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const moviePathUrl = `/movie/${id}${MovieUrls.apiKey}&language=de-De&append_to_response=videos,images,credits`;
  const [movie] = useMovieApi<Movie>("get", moviePathUrl);

  const moviesUrl = `/movie/popular${MovieUrls.apiKey}&language=de-De`;

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
        <Col flex={1} style={{ padding: 40, maxWidth: 300 }}>
          {/* <Carousel autoplay style={{ display: "inline flow" }}>
            {movie.images.posters.map((image, index) => (
              <div key={index}>
                <img
                  alt={movie.release_date}
                  src={`${MovieUrls.imgBaseUrl}/${image.poster_path}`}
                />
              </div>
            ))}
          </Carousel> */}
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
              <List
                itemLayout="horizontal"
                dataSource={actors || []}
                renderItem={(item) => (
                  <List.Item onClick={() => history.push(`/actors/${item.id}`)}>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`${MovieUrls.imgBaseUrl}/${item.profile_path}`}
                        />
                      }
                      title={item.original_name}
                    />
                  </List.Item>
                )}
              />
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
