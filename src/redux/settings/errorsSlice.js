import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set } = errorsSlice.actions;
export default errorsSlice.reducer;
