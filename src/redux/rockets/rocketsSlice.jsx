/* eslint-disable camelcase */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const response = await axios('https://api.spacexdata.com/v4/rockets');
    const rockets = await response.data;
    const extractedRockets = [];
    rockets.forEach((element) => {
      const {
        id, name, description, flickr_images,
      } = element;
      extractedRockets.push({
        id, name, description, flickr_images, reserve: false,
      });
    });
    return extractedRockets;
  } catch (error) {
    return error;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: { rocketsArr: [], isLoading: true },
  reducers: {
    reserve: (state, action) => {
      const itemId = action.payload;
      const rockets = state.rocketsArr.find((item) => item.id === itemId);
      rockets.reserve = true;
    },
    cancel: (state, action) => {
      const itemId = action.payload;
      const rockets = state.rocketsArr.find((item) => item.id === itemId);
      rockets.reserve = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getRockets.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        rocketsArr: action.payload,
      }))
      .addCase(getRockets.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

export const { reserve, cancel } = rocketsSlice.actions;

export default rocketsSlice.reducer;
