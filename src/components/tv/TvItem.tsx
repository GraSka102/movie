import { Card, Col, Popover, Rate, Tag } from "antd";
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import { MovieUrls } from "../../shared/utils";
import { Tv } from "../types/Tv";

interface Props {
  tv: Tv;
}

export default function MovieItem({ tv }: Props): ReactElement {
  const { Meta } = Card;
  const history = useHistory();
  const backdropUrl = `${MovieUrls.imgBaseUrl}${tv.backdrop_path}`;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push(`/tvs/${tv.id}`);
  };

  return (
    <>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Popover
          getPopupContainer={(triggerNode) => triggerNode}
          title={tv.name}
          content={tv.overview}
        >
          <Card
            onClick={(e) => onClick(e)}
            hoverable
            cover={<img alt={tv.name} src={backdropUrl} />}
          >
            <Meta
              title={
                <div>
                  <span style={{ marginRight: 20 }}>{tv.name}</span>
                  <Tag color="#bfbfbf">{tv.first_air_date.slice(0, 4)}</Tag>
                </div>
              }
              description={
                <div>
                  <p>
                    {`Note: ${tv.vote_average} `}
                    <Rate allowHalf disabled value={tv.vote_average / 2} />
                  </p>
                  <p>{`Bewertungen: (${tv.vote_count})`}</p>
                  <p>{`Popularität: ${tv.popularity}`}</p>
                </div>
              }
            />
          </Card>
        </Popover>
      </Col>
    </>
  );
}
