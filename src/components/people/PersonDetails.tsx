import { Avatar, Card, Carousel, Col, Divider, List, Row } from "antd";
import React, { ReactElement } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useMovieApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import { Person, PersonInfo } from "../types/People";

export default function PersonDetails(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const personInfoUrl = `/person/${id}${MovieUrls.apiKey}&language=de-De&append_to_response=videos,images`;
  const [personInfo] = useMovieApi<PersonInfo>("get", personInfoUrl);

  const peopleUrl = `/person/popular${MovieUrls.apiKey}&language=de-De`;
  const [people] = useMovieApi<{ results: Person[] }>("get", peopleUrl);

  const person = people?.results.find((person) => person.id === Number(id));

  if (!personInfo || !people) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Divider orientation="center">
        <h1>{personInfo.name}</h1>
      </Divider>
      <Row justify="space-between" align="top">
        <Col flex={1} style={{ padding: 40, maxWidth: 300 }}>
          <Carousel autoplay style={{ display: "inline flow" }}>
            {personInfo.images.profiles.map((img, index) => (
              <div key={index}>
                <img
                  alt={personInfo.name}
                  src={`${MovieUrls.imgBaseUrl}/${img.file_path}`}
                />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col flex={3} offset="1">
          <div className="site-card-border-less-wrapper">
            <Card
              title={personInfo.gender == 1 ? "weiblich" : "männlich"}
              bordered={false}
            >
              <p>{`Popularität: ${personInfo.popularity}`}</p>
              <p>
                {`Geboren: ${personInfo.birthday} ${
                  !personInfo.deathday
                    ? ""
                    : `Gestorben: ${personInfo.deathday}`
                }`}
              </p>
              <p>{`Geburtsort: ${personInfo.place_of_birth}`}</p>
              <p>{`Beruf: ${personInfo.known_for_department}`}</p>
              <p>
                <a href={personInfo.homepage}>{`${
                  personInfo.homepage ? `${personInfo.homepage}` : ""
                }`}</a>
              </p>
              <h4>Bekannt für:</h4>
              <List
                itemLayout="horizontal"
                dataSource={person?.known_for || []}
                renderItem={(item) => (
                  <List.Item onClick={() => history.push(`/movies/${item.id}`)}>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`${MovieUrls.imgBaseUrl}/${item.backdrop_path}`}
                        />
                      }
                      title={item.title}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        </Col>
        <Col span={10} flex="auto">
          <div className="site-card-border-less-wrapper">
            <Card title="Biografie" bordered={false}>
              <p>{personInfo.biography}</p>
            </Card>
          </div>
        </Col>
      </Row>
      <Divider orientation="center"></Divider>
    </>
  );
}
