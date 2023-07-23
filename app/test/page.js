"use client";

import { changeState } from "@/redux/slices/testSlices";
import { store } from "@/redux/store";

export default function Test() {
  const s = store.getState();

  return (
    <h1>
      <label>hellw</label>
      <input
        onChange={(e) => {
          store.dispatch(changeState(e.target.value));
          console.log(store.getState());
        }}
      />
    </h1>
  );
}
