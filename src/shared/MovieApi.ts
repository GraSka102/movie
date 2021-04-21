import React from "react";
import axios, { AxiosResponse, Method } from 'axios';
import { useEffect, useState } from 'react';
import {MovieUrls} from './utils'

export function useMovieApi<T>(method: Method, path: string): ([state: (T | undefined), setState: React.Dispatch<React.SetStateAction<T | undefined>>]) {
  const [state, setState] = useState<T>()

  useEffect(() => {
    movieApi(method, path, setState);

    return () => {
      // cleanup
    }
  }, [method, path])
  return [state, setState];
}

export function movieApi<T>(method: Method, path: string, callback: (data: T) => void, data = {}): void {
  
  const url = `${MovieUrls.baseUrl}${path}`;
  axios({
    method: method,
    url: url,
    data
  })
    .then((response: AxiosResponse<T>) => callback(response.data))
    .catch((error) => console.log('Error', error.message))
    .then(() => console.log("Request succeeded"))
}

