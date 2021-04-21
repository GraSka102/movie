import { Input, Space } from "antd";
import React, { ReactElement, useState } from "react";
import { useMovieApi } from "../../shared/MovieApi";
import { MovieUrls } from "../../shared/utils";
import { LoadingSpinner } from "../LoadingSpinner";
import { Movie } from "../types/Movie";
import Popup from "./Popup";

export default function MoviesSearch(): ReactElement {
  const [foundMovies, setFoundMovies] = useState<Movie[]>();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const pathUrl = `/movie/popular${MovieUrls.apiKey}${MovieUrls.queryParam}`;
  const [movies] = useMovieApi<{ results: Movie[] }>("get", pathUrl);

  const { Search } = Input;

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value !== "" ? setPopupOpen(true) : setPopupOpen(false);
  };

  const onInputChange = (value: string) => {
    const keyword = value;
    onSearch(keyword);
  };

  if (!movies) {
    return <LoadingSpinner />;
  }
  const onSearch = (keyword: string) => {
    const pattern = `[A-Za-z.\\s]*${keyword}[A-Za-z.\\s]*`;
    const matchRegex = new RegExp(pattern, "i");
    const found = movies.results.filter((movie) => {
      return matchRegex.test(movie.title);
    });
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
