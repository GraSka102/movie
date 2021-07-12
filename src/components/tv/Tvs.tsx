import React, { ReactElement } from "react";
import { useMovieApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import { Tv } from "../types/Tv";
import { TvList } from "./TvList";

export default function Tvs(): ReactElement {
  const tvPathUrl = `/tv/popular${MovieUrls.apiKey}${MovieUrls.queryParam}`;
  const [tvs] = useMovieApi<{ results: Tv[] }>("get", tvPathUrl);

  if (!tvs) {
    return <LoadingSpinner />;
  }
  return <TvList tvs={tvs.results} />;
}
