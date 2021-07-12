import { Card, Col, Popover, Rate, Tag } from "antd";
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import { MovieUrls } from "../../shared/utils";
import { Movie } from "../types/Movie";

interface Props {
  movie: Movie;
}

export default function MovieItem({ movie }: Props): ReactElement {
  const { Meta } = Card;
  const history = useHistory();

  const backdropUrl = `${MovieUrls.imgBaseUrl}${movie.backdrop_path}`;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push(`/movies/${movie.id}`);
  };

  return (
    <>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
        <Popover
          getPopupContainer={(triggerNode) => triggerNode}
          title={movie.title}
          content={movie.overview}
        >
          <Card
            onClick={(e) => onClick(e)}
            hoverable
            cover={<img alt={movie.title} src={backdropUrl} />}
          >
            <Meta
              title={
                <div>
                  <span style={{ marginRight: 20 }}>{movie.title}</span>

                  <Tag color="#bfbfbf">
                    {movie.release_date
                      ? movie.release_date.slice(0, 4)
                      : " ohne Datum"}
                  </Tag>
                </div>
              }
              description={
                <div>
                  <p>
                    {`Note: ${movie.vote_average} `}
                    <Rate allowHalf disabled value={movie.vote_average / 2} />
                  </p>
                  <p>{`Bewertungen: (${movie.vote_count})`}</p>
                  <p>{`Popularität: ${movie.popularity}`}</p>
                </div>
              }
            />
          </Card>
        </Popover>
      </Col>
    </>
  );
}
