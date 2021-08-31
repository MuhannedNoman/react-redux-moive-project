import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "./apiInfo";
import { onFailedRequest, onSuccessRequest } from "./onRequestInterceptor";

const imdbInstance = axios.create({
  baseURL: API_URL,
});

imdbInstance.interceptors.request.use(onSuccessRequest, onFailedRequest);

export const fetchMovies = createAsyncThunk("imdb/fetchMovies?", (config) =>
  imdbInstance.get("discover/movie?", config).then((res) => res.data)
);

export default { fetchMovies };
