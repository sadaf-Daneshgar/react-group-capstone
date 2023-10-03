import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRocketsData = createAsyncThunk('rockets/getRockets', async () => {
  const response = await axios.get(URL);
  return response.data;
});

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const { reservedRocketId } = action.payload;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== reservedRocketId) return rocket;
        return { ...rocket, reserved: true };
      });
    },
    cancelReservation: (state, action) => {
      const { canceledRocketId } = action.payload;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== canceledRocketId) return rocket;
        return { ...rocket, reserved: false };
      });
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRocketsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRocketsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
