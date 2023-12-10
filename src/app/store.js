import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/createUserSlice";
import moviesReducer from "../features/createMoviesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
  },
});

export default store;
