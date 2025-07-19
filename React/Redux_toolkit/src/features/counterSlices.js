import { createSlice } from "@reduxjs/toolkit";

export const counterSlices = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },
  
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
     reset: (state) => {
      state.value = 0 ;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , reset } = counterSlices.actions;

export default counterSlices.reducer;
