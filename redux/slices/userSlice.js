const { createSlice } = require("@reduxjs/toolkit");

const initialState = { userName: "", token: "", email: "" };
const User = createSlice({
  name: "test",
  initialState,
  reducers: {
    SetUser: (state, action) => {

      // (state.email = action.payload.email),
        // (state.token = action.payload.token),
        // (state.userName = action.payload.userName);
    },
  },
});

export const { SetUser } = User.actions;
export default User.reducer;
