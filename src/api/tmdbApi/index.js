import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "./apiInfo";
import { onFailedRequest, onSuccessRequest } from "./onRequestInterceptor";

const tmdbInstance = axios.create({
  baseURL: API_URL,
});

tmdbInstance.interceptors.request.use(onSuccessRequest, onFailedRequest);

export const movies = {
  fetch: createAsyncThunk("tmdb//movies/fetch", (config) =>
    tmdbInstance.get("discover/movie?", config).then((res) => res.data)
  ),

  fetchPopular: createAsyncThunk("tmdb/movies/fetchPopular", (config) =>
    tmdbInstance.get("movie/popular?", config).then((res) => res.data)
  ),

  fetchTrending: createAsyncThunk("tmdb/movies/fetchTrending", (config) =>
    tmdbInstance.get("trending/movie/week?", config).then((res) => res.data)
  ),

  search: createAsyncThunk("tmdb/movies/search", (config) =>
    tmdbInstance.get("search/movie?", config).then((res) => res.data)
  ),

  fetchLatest: createAsyncThunk("tmdb/movies/latest", (config) =>
    tmdbInstance.get("movie/latest?", config).then((res) => res.data)
  ),
};

export const actors = {
  fetch: createAsyncThunk("tmdb/actors/fetch", (config) =>
    tmdbInstance.get("person/popular?", config).then((res) => res.data)
  ),
};

export const genres = {
  fetchMovieGenres: createAsyncThunk("tmdb/movieGenres/fetch", (config) =>
    tmdbInstance.get("genre/movie/list?", config).then((res) => res.data)
  ),
};
export default { movies, actors, genres };
