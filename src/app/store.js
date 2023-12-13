import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/createUserSlice";
import moviesReducer from "../features/createMoviesSlice";
import movieTrailer from "../features/createMovieTrailer";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
    trailer: movieTrailer,
  },
});

export default store;
