const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const LinksSlice = createSlice({
  name: "Links",
  initialState,
  reducers: {
    setInitialLinks: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state[i] = action.payload[i];
      }
    },
    UpdateLinkLitems: (state, action) => {
      state.push(action.payload);
    },
    DeleteLinkItem: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { setInitialLinks, UpdateLinkLitems, DeleteLinkItem } =
  LinksSlice.actions;

export default LinksSlice.reducer;
