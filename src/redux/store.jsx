import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore(
  {
    reducer: {
      missions: missionsReducer,
      rockets: rocketsReducer,
    },
  },
  applyMiddleware(logger),
);

export default store;
