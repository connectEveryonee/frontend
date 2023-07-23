"use client";
import { Provider } from "react-redux";
import { store } from "./store";

export default function ReduxProvider({ Children }) {
  const preloadedState = window.__PRELOADED_STATE__;
  <Provider store={store} >{Children}</Provider>;
}
