import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const seedSlice = createSlice({
  name: 'seed',
  initialState,
  reducers: {
    seed: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { seed } = seedSlice.actions;
export default seedSlice.reducer;
