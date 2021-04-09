import { Row } from "antd";
import React, { ReactElement } from "react";
import { LoadingSpinner } from "../LoadingSpinner";
import { Person } from "../types/People";
import PersonListItem from "./PersonListItem";

interface Props {
  people: Person[];
}
export default function PeopleList({ people }: Props): ReactElement {
  if (!people) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <Row
        gutter={[
          { xs: 16, sm: 16, md: 24, lg: 32, xl: 32 },
          { xs: 16, sm: 16, md: 24, lg: 32, xl: 32 },
        ]}
      >
        {people.map((person) => (
          <PersonListItem key={person.id} person={person} />
        ))}
      </Row>
    </>
  );
}
