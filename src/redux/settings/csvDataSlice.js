import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array: [],
};

export const csvDataSlice = createSlice({
  name: 'csvData',
  initialState,
  reducers: {
    updateCSV: (state, action) => {
      // console.log(state.array);
      state.array = action.payload;
    },
  },
});

export const { updateCSV } = csvDataSlice.actions;
export default csvDataSlice.reducer;
