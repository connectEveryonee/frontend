const { createSlice } = require("@reduxjs/toolkit");

const initialState = { name: "" };
const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    changeState: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeState } = testSlice.actions;
export default testSlice.reducer;
