import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import errorsReducer from './settings/errorsSlice';
import regionReducer from './settings/regionSlice';
import seedReducer from './settings/seedSlice';
import csvDataReducer from './settings/csvDataSlice';

const store = configureStore({
  reducer: {
    errors: errorsReducer,
    region: regionReducer,
    seed: seedReducer,
    csvData: csvDataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
