import { createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';

const initialState = {
  value: faker.seed(),
};

export const seedSlice = createSlice({
  name: 'seed',
  initialState,
  reducers: {
    set: (state, action) => {
      faker.seed(action.payload);
      state.value = action.payload;
    },
    random: (state) => {
      state.value = faker.seed();
    },
  },
});

export const { set, random } = seedSlice.actions;
export default seedSlice.reducer;
