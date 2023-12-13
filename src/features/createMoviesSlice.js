import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import TMDB_API from "../utilities/constant/movieServices";

export const fetchMoviesApi = createAsyncThunk(
  "movies/fetchMoviesApi",
  async () => {
    const response = await fetch(TMDB_API.popular);
    return await response.json();
  }
);

const initialState = {
  movies: null,
  isError: false,
  isLoading: false,
};

const createMoviesSlice = createSlice({
  name: "movies",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(fetchMoviesApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMoviesApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMoviesApi.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export default createMoviesSlice.reducer;
