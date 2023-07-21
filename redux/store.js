import testSlices from "./slices/testSlices";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import linksSlice from "./slices/linksSlice";

export const store = configureStore({
  reducer: { test: testSlices, user: userSlice, Links: linksSlice },
});
