import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
});
