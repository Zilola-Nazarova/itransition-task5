// import { en } from '@faker-js/faker';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'en',
};

export const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    selectRegion: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectRegion } = regionSlice.actions;
export default regionSlice.reducer;
