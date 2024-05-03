// import { en } from '@faker-js/faker';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    select: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { select } = regionSlice.actions;
export default regionSlice.reducer;
