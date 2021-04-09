import { Input, Space } from "antd";
import React, { ReactElement, useState } from "react";
import { useMoviApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import { Movie } from "../types/Movie";
import Popup from "./Popup";

const popularPath = `/movie/popular`;
const apiKey = `?api_key=33ac3f7294029ae5f0eb2044825a4c47`;
const queryParam = `&language=de-De&page=1`;

export default function MoviesSearch(): ReactElement {
  const [foundMovies, setFoundMovies] = useState<Movie[]>();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const pathUrl = `${popularPath}${MovieUrls.apiKey}${queryParam}`;
  const [movies] = useMoviApi<{ results: Movie[] }>("get", pathUrl);

  const { Search } = Input;

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value !== "" ? setPopupOpen(true) : setPopupOpen(false);
    console.log("input " + isPopupOpen);
  };

  const onInputChange = (value: string) => {
    const keyword = value;
    console.log("input change");
    onSearch(keyword);
  };

  if (!movies) {
    return <LoadingSpinner />;
  }
  const onSearch = (keyword: string) => {
    console.log(keyword);
    const pattern = `[A-Za-z.\\s]*${keyword}[A-Za-z.\\s]*`;
    const matchRegex = new RegExp(pattern, "i");
    const found = movies.results.filter((movie) => {
      return matchRegex.test(movie.title);
    });
    found.forEach((movie) => console.log(movie.title));
    setFoundMovies(found);
  };

  return (
    <Space direction="vertical">
      <Search
        size="large"
        placeholder="Filmtitel angeben"
        allowClear
        onInput={onInput}
        onChange={(e) => onInputChange(e.target.value)}
        onSearch={onSearch}
        enterButton
      />
      <div>
        <div>
          <Popup isPopupOpen={isPopupOpen} foundMovies={foundMovies} />
        </div>
      </div>
    </Space>
  );
}
