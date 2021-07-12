import { Avatar, Card, Col, Divider, List, Row, Tag, Descriptions } from "antd";
import React, { Fragment, ReactElement } from "react";

import { useParams } from "react-router-dom";
import { useMovieApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import ActorList from "./TvCastList";
import { TvInfo } from "../types/Tv";

export default function TvDetails(): ReactElement {
  const { id } = useParams<{ id: string }>();

  const tvPathUrl = `/tv/${id}${MovieUrls.apiKey}&language=de-DE&append_to_response=videos,images,credits`;
  const [tv] = useMovieApi<TvInfo>("get", tvPathUrl);

  const actors = tv?.credits.cast.filter(
    (person) => person.known_for_department === "Acting"
  );

  if (!tv) {
    return <LoadingSpinner />;
  }
  const seasons = tv?.seasons;

  return (
    <>
      <Divider orientation="center">
        <h1>{tv.name}</h1>
      </Divider>
      <Row>
        <Descriptions column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
          <Descriptions.Item label="Start">
            {tv.last_air_date}
          </Descriptions.Item>
          <Descriptions.Item label="Genre(s)">
            {tv.genres.map((g, index, array) => (
              <Tag key={index}>{`${g.name}`}</Tag>
            ))}
          </Descriptions.Item>
          <Descriptions.Item label="Produktionsunternehmen" span={3}>
            {tv.production_companies.map((comp, index, array) => (
              <Tag key={index}>{`${comp.name}`}</Tag>
            ))}
          </Descriptions.Item>
          <Descriptions.Item label="Ausgestrahlt">
            {tv.networks.map((net) => (
              <Tag key={net.id}>{`${net.name}`}</Tag>
            ))}
          </Descriptions.Item>
          <Descriptions.Item label="Anzahl Episoden">
            {tv.number_of_episodes}
          </Descriptions.Item>
          <Descriptions.Item label="Anzahl Seasons">
            {tv.number_of_seasons}
          </Descriptions.Item>
        </Descriptions>
        <Divider orientation="center"></Divider>
      </Row>

      <Row>
        <Col xs={32} sm={24} md={12} lg={12} xl={4} xxl={3}>
          <div>
            <img
              alt={tv.name}
              src={`${MovieUrls.imgBaseUrl}${tv.poster_path}`}
            />
          </div>
        </Col>
        <Col xs={32} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card title={`Seasons: ${seasons.length}\n`} bordered={true}>
            <div className="demo-infinite-container">
              <List
                dataSource={seasons}
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          shape="square"
                          size={80}
                          src={`${MovieUrls.imgBaseUrl}${item.poster_path}`}
                        />
                      }
                      title={
                        <Fragment>
                          <p>{`${item.name} `}</p>
                          <p> {` Filmstart: ${item.air_date}`}</p>
                        </Fragment>
                      }
                      description={item.overview}
                    />
                  </List.Item>
                )}
              ></List>
            </div>
          </Card>
        </Col>
        <Col xs={32} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card title="Beschreibung" bordered={true}>
            <p>{tv.overview}</p>
          </Card>
        </Col>

        <Col xs={32} sm={24} md={12} lg={12} xl={6} xxl={7}>
          <Card title={"Darsteller: "} bordered={true}>
            <ActorList actors={actors} />
          </Card>
        </Col>
      </Row>
      <Divider orientation="center"></Divider>
    </>
  );
}
