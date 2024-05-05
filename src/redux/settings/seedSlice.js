import { createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';

const initialState = {
  value: faker.seed(),
};

export const seedSlice = createSlice({
  name: 'seed',
  initialState,
  reducers: {
    setSeed: (state, action) => {
      faker.seed(Number(action.payload));
      state.value = Number(action.payload);
    },
    randomSeed: (state) => {
      state.value = faker.seed();
    },
  },
});

export const { setSeed, randomSeed } = seedSlice.actions;
export default seedSlice.reducer;
