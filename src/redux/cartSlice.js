import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     items:[]
// };

const cartSlice = createSlice({
  name: "Addfav",
  initialState: { items: [] },
  reducers: {
    favorite: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (!item) {
        state.items.push(action.payload);
      }
    },
    removeFav: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    },
  },
});
export const { favorite, removeFav } = cartSlice.actions;
export default cartSlice.reducer;
