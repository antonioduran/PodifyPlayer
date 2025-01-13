import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    auth: authReducer, // Do not remove this
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store; // Do not remove this
