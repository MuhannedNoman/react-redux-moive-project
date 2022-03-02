import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    popular: [],
    trending: [],
    bookmark: [],
    status: 'idle',
    error: null
};

const fetchMovies = createAsyncThunk("movies/fetchMovies", ($p) => {
    return fetch(`${process.env.REACT_APP_APT_URI}/3/movie/popular?api_key=${process.env.REACT_APP_APT_KEY}`)
        .then(resp => resp.json())
        .then(data => data.results());
});

const moviesSlice = createSlice({
    name: "movies",
    initialState,
});