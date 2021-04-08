import React, { ReactElement } from "react";
import { useMoviApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import { Person } from "../types/People";
import PeopleList from "./PeopleList";

export default function People(): ReactElement {
  // const pathUrl = `/movie/top_rated${MovieUrls.apiKey}&language=de-De`;
  // const pathUrl = `/movie/now_playing${MovieUrls.apiKey}&language=de-De&page=1`;
  const peopleUrl = `/person/popular${MovieUrls.apiKey}&language=de-De`;
  // { results: Movie[] }
  const [people] = useMoviApi<{ results: Person[] }>("get", peopleUrl);

  if (!people) {
    return <LoadingSpinner />;
  }
  console.log("people:" + people.results.length);
  return <PeopleList people={people.results} />;
  //return <p>People</p>;
}
