import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    set: (state, action) => {
      state.session = action.payload;
    },
    clear: (state) => {
      state.session = "";
    },
  },
});

export const authReducer = authSlice.reducer;
export const { set, clear } = authSlice.actions;
export default authReducer;
