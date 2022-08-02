import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import hamburgerSlice from "./Hamburger/hamburgerSlice";

const reducers = combineReducers({
  hamburger: hamburgerSlice,
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["hamburger"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
