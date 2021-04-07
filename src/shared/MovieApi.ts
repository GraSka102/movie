import React from "react";
import axios, { AxiosResponse, Method } from 'axios';
import { useEffect, useState } from 'react';
import {MovieUrls} from './utils'

/* Api-Schlüssel (v3 auth) 
33ac3f7294029ae5f0eb2044825a4c47

API-Token für Lesezugriff (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2FjM2Y3Mjk0MDI5YWU1ZjBlYjIwNDQ4MjVhNGM0NyIsInN1YiI6IjYwNjRkNzI5ZTE5ZGU5MDA1ODRmYjQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d7PUUwFNEjwWgGOYkzjTRmZtOGimf7c3-wleTGvTr9E
 */

//const baseUrl = 'https://api.themoviedb.org/3'

// export function movieApi<T>(method: Method, path: string, callback: (data: T) => void, data = {}): void {
//   const url = `${MovieUrls.baseUrl}${path}`;
//   axios({
//     method: method,
//     url: url,
//     data
//   })
//     .then((response: AxiosResponse<T>) => callback(response.data))
//     .catch((error) => console.log('Error', error.message))
//     .then(() => console.log("Request succeeded"))
// }

export function useMoviApi<T>(method: Method, path: string): ([state: (T | undefined), setState: React.Dispatch<React.SetStateAction<T | undefined>>]) {
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

