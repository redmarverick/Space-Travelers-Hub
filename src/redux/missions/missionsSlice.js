import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios('https://api.spacexdata.com/v3/missions');
    const missions = await response.data;
    return missions;
  } catch (error) {
    return error;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: { missionsArr: [], isLoading: true },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missionsArr = action.payload;
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default missionsSlice.reducer;
