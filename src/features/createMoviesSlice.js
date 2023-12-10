import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { POPULAR_MOVIES, options } from "../../config";

export const fetchMoviesApi = createAsyncThunk(
  "movies/fetchMoviesApi",
  async () => {
    const response = await fetch(POPULAR_MOVIES, options);
    return await response.json();
  }
);
const initialState = {
  isLoading: false,
  movies: null,
  isError: false,
};

const createMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
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
