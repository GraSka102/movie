import { Row } from "antd";
import React, { ReactElement } from "react";
import { Tv } from "../types/Tv";
import TvItem from "./TvItem";

interface Props {
  tvs: Tv[];
}

export function TvList({ tvs }: Props): ReactElement {
  return (
    <>
      <div className="site-border-less-wrapper ">
        <Row
          gutter={[
            { xs: 16, sm: 16, md: 24, lg: 32, xl: 32 },
            { xs: 16, sm: 16, md: 24, lg: 32, xl: 32 },
          ]}
        >
          {tvs.map((tv) => (
            <TvItem key={tv.id} tv={tv} />
          ))}
        </Row>
      </div>
    </>
  );
}
