import { createSlice } from "@reduxjs/toolkit";

/*
** Create a folder named Slices/Features and create the corresponding slices.
1. Import createSlice from Redux Toolkit to define a slice of state.
2. Create a slice named 'counterSlice' with:
   a) `name` - identifies the slice (useful for Redux DevTools).
   b) `initialState` - sets the initial state of this slice.
   c) `reducers` - define functions (called actions) that update state.
      - These reducers receive the current state and update it directly (using Immer).
3. The store holds the current state; reducers specify how to produce the new state.
4. Export the action creators and the reducer:
   - Actions allow dispatching events.
   - Reducer is used by the store to update state based on actions.
*/

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // Increase counter value by 1
    },
    decrement: (state) => {
      state.value -= 1; // Decrease counter value by 1
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
