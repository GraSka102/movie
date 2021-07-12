import { List, Avatar } from "antd";
import React, { ReactElement, useState } from "react";
import { useHistory } from "react-router-dom";
import { MovieUrls } from "../../shared/utils";
import { Cast } from "../types/Tv";

interface Props {
  actors: Cast[] | undefined;
}
export default function TvCastList({ actors }: Props): ReactElement {
  const history = useHistory();

  return (
    <div className="demo-infinite-container">
      <List
        dataSource={actors}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            onClick={() => history.push(`/actors/${item.id}`)}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  size="large"
                  src={`${MovieUrls.imgBaseUrl}/${item.profile_path}`}
                />
              }
              title={item.name}
              description={item.character}
            />
          </List.Item>
        )}
      ></List>
    </div>
  );
}
