import { Card, Col, Divider, Row } from "antd";
import Link from "antd/lib/typography/Link";
import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useMoviApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import { PersonInfo } from "../types/People";

export default function PersonDetails(): ReactElement {
  const { id } = useParams<{ id: string }>();

  const pathUrl = `/person/${id}${MovieUrls.apiKey}&language=de-De`;
  //const pathUrl = `/person/${id}/translations${MovieUrls.apiKey}&language=de-De`;
  const [person] = useMoviApi<PersonInfo>("get", pathUrl);

  if (!person) {
    return <LoadingSpinner />;
  }
  const imgUrl = `http://image.tmdb.org/t/p/w185/${person.profile_path}`;

  return (
    <>
      <Divider orientation="center">
        <h1>{person.name}</h1>
      </Divider>
      <Row justify="space-between" align="top">
        <Col flex={1} style={{ padding: 40 }}>
          <div>
            <img alt={person.name} src={imgUrl} />
          </div>
        </Col>
        <Col flex={3} offset="1">
          <div className="site-card-border-less-wrapper">
            <Card
              title={person.gender == 1 ? "weiblich" : "männlich"}
              bordered={false}
            >
              <p>{`Popularität: ${person.popularity}`}</p>
              <p>
                {`Geboren: ${person.birthday} ${
                  !person.deathday ? "" : `Gestorben: ${person.deathday}`
                }`}
              </p>
              <p>{`Geburtsort: ${person.place_of_birth}`}</p>
              <p>{`Beruf: ${person.known_for_department}`}</p>
              <p>
                <a href={person.homepage}>{`${
                  person.homepage ? `Homepage: ${person.homepage}` : ""
                }`}</a>
              </p>
            </Card>
          </div>
        </Col>
        <Col span={10} flex="auto">
          <div className="site-card-border-less-wrapper">
            <Card title="Biografie" bordered={false}>
              <p>{person.biography}</p>
            </Card>
          </div>
        </Col>
      </Row>
      <Divider orientation="center"></Divider>
    </>
  );
}
