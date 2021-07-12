import { Row } from "antd";
import React, { ReactElement } from "react";
import { Person } from "../types/People";
import PersonItem from "./PersonItem";

interface Props {
  people: Person[];
}
export default function PeopleList({ people }: Props): ReactElement {
  return (
    <>
      <div className="site-border-less-wrapper ">
        <Row
          gutter={[
            { xs: 16, sm: 16, md: 24, lg: 32, xl: 32 },
            { xs: 16, sm: 16, md: 24, lg: 32, xl: 32 },
          ]}
        >
          {people.map((person) => (
            <PersonItem key={person.id} person={person} />
          ))}
        </Row>
      </div>
    </>
  );
}
