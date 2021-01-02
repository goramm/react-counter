import { counterSlice } from '.';
import { initialState } from './slice';

describe('features > counter', () => {
  it(`increment action`, () => {
    const expectedState = {
      value: 1,
    };

    expect(
      counterSlice.reducer(initialState, counterSlice.actions.increment())
    ).toEqual(expectedState);
  });

  it(`decrement action`, () => {
    const expectedState = {
      value: -1,
    };

    expect(
      counterSlice.reducer(initialState, counterSlice.actions.decrement())
    ).toEqual(expectedState);
  });
});
