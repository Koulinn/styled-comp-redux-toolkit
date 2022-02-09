import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import newsReducer from "../features/counter/thunkExample.js";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: { counter: counterReducer, news: newsReducer },
  middleware: [thunk, logger],
  devTools: true,
});
