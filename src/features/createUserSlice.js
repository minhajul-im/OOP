import { createSlice } from "@reduxjs/toolkit";

const createUserSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      state = action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = createUserSlice.actions;

export default createUserSlice.reducer;
