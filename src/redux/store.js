import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import misionsReducer from './misions/misionsSlice';

const store = configureStore(
  {
    reducer: {
      misions: misionsReducer,
    },
  },
  applyMiddleware(logger),
);

export default store;
