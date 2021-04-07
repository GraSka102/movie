import { Card, Col, Divider, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { ReactElement } from "react";
import { Link, useHistory } from "react-router-dom";
import { MovieUrls } from "../../shared/utils";
import { Person } from "../types/People";

interface Props {
  person: Person;
}

export default function PersonListItem({ person }: Props): ReactElement {
  const history = useHistory();

  const imgUrl = `http://image.tmdb.org/t/p/w185/${person.profile_path}`;
  console.log(imgUrl);

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
          <Meta
            title={person.name}
            description={`Popularität: ${person.popularity}`}
          />
          {person.known_for.map((kf, index) => (
            <p key={index}>{kf.title}</p>
          ))}
          <p></p>
        </Card>
      </Col>
    </>

    // <>
    //   <Divider orientation="left">
    //     <h1>{person.name}</h1>
    //   </Divider>
    //   <Row justify="space-between" align="top">
    //     {/* <Col flex={1} style={{ padding: 40 }}>
    //         <div>
    //           <img alt={movie.title} src={imgUrl} />
    //         </div>
    //       </Col> */}
    //     <Col flex={3} offset="2">
    //       <div className="site-card-border-less-wrapper">
    //         <Card title={`Beliebtheit: ${person.popularity}`} bordered={false}>
    //           <p>{`url: ${person.profile_path}`}</p>
    //           <p>{person.gender === 1 ? "weiblich" : "männlich"}</p>

    //           {person.known_for.map((kf, index) => (
    //             <p key={index}>{kf.title}</p>
    //           ))}
    //         </Card>
    //       </div>
    //     </Col>
    //     <Col span={10} flex="auto">
    //       <div className="site-card-border-less-wrapper">
    //         <Card title="Beschreibung" bordered={false}>
    //           <p>{person.adult}</p>
    //         </Card>
    //       </div>
    //     </Col>
    //   </Row>
    //   <Divider orientation="center"></Divider>
    // </>
    // <>
    //   <Col xs={24} sm={12} md={8} lg={6} xl={4}>
    //     <Card
    //       //   onClick={(e) => onClick(e)}
    //       hoverable
    //       // hier keine feste Breite nutzen
    //       // style={{ width: 240 }}
    //       cover={<Link to={person.profile_path}>{person.name}</Link>}
    //     >
    //       <Meta
    //         title={`Bekanntheit: ${person.popularity}`}
    //         description={person.popularity}
    //       />
    //       <p>{person.gender === 1 ? "weiblich" : "männlich"}</p>
    //       {person.known_for.map((kf, index) => (
    //         <p key={index}>{kf.title}</p>
    //       ))}
    //     </Card>
    //   </Col>
    // </>
  );
}
