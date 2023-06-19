import { configureStore } from '@reduxjs/toolkit';
import misionsReducer from './misions/misionsSlice';

const store = configureStore({
  reducer: {
    misions: misionsReducer,
  },
});

export default store;
