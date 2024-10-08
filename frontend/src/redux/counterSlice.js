// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for counter state management
const counterSlice = createSlice({
  // The name of the slice, which will be used as a prefix in action types
  name: "counter",

  // The initial state of the counter
  initialState: {
    value: 0, // Initialize the counter value to 0
  },

  // Reducers define the actions and how they modify the state
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export the action creators generated by createSlice
export const { increment, decrement } = counterSlice.actions;

// Export the reducer generated by createSlice
export default counterSlice.reducer;
