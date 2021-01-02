import { createSlice } from '@reduxjs/toolkit';

export interface ICounterState {
  value: number;
}

export const initialState: ICounterState = {
  value: 0,
};

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

export const { actions, reducer } = counter;
