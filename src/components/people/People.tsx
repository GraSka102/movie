import React, { ReactElement } from "react";
import { useMoviApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import { Person } from "../types/People";
import PeopleList from "./PeopleList";

export default function People(): ReactElement {
  const peopleUrl = `/person/popular${MovieUrls.apiKey}${MovieUrls.queryParam}`;
  const [people] = useMoviApi<{ results: Person[] }>("get", peopleUrl);

  if (!people) {
    return <LoadingSpinner />;
  }

  return <PeopleList people={people.results} />;
}
