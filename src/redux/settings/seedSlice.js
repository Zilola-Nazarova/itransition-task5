import { createSlice } from '@reduxjs/toolkit';
import { allFakers } from '@faker-js/faker';

const initialState = {
  value: allFakers.en.seed(),
};

export const seedSlice = createSlice({
  name: 'seed',
  initialState,
  reducers: {
    setSeed: (state, action) => {
      allFakers[action.payload.region].seed(action.payload.seed);
      state.value = action.payload.seed;
    },
    randomSeed: (state, action) => {
      state.value = allFakers[action.payload].seed();
    },
  },
});

export const { setSeed, randomSeed } = seedSlice.actions;
export default seedSlice.reducer;
