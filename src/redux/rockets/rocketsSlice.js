import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRocketsData = createAsyncThunk(
  'rockets/fetchRocketsData',
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

const initialState = {
  rockets: [],
  reservedRockets: [],
  isLoading: false,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocket) => (
        rocket.id !== rocketId ? rocket : { ...rocket, reserved: true }
      ));
      state.reservedRockets = [...state.reservedRockets, rocketId];
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocket) => (
        rocket.id !== rocketId ? rocket : { ...rocket, reserved: false }
      ));
      state.reservedRockets = state.reservedRockets.filter(
        (reservedId) => reservedId !== rocketId,
      );
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
        state.rockets = action.payload.map((rocket) => ({
          ...rocket,
          reserved: state.reservedRockets.includes(rocket.id),
        }));
      })
      .addCase(fetchRocketsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
