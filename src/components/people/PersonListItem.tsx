import { Card, Col, Divider } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { MovieUrls } from "../../shared/utils";
import { Person } from "../types/People";

interface Props {
  person: Person;
}

export default function PersonListItem({ person }: Props): ReactElement {
  const history = useHistory();
  const imgUrl = `${MovieUrls.imgBaseUrl}${person.profile_path}`;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push(`/actors/${person.id}`);
  };

  return (
    <>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Card
          onClick={(e) => onClick(e)}
          hoverable
          cover={<img alt={person.name} src={imgUrl} />}
        >
          <Meta title={person.name} />
          <Divider />
          {person.known_for.map((kf, index) => (
            <p key={index}>{kf.title}</p>
          ))}
        </Card>
      </Col>
    </>
  );
}
