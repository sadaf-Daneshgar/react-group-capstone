import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const RocketURL = 'https://api.spacexdata.com/v4/rockets';

export const getRocketsData = createAsyncThunk(
  'rockets/getRocketsData',
  async () => {
    const response = await fetch(RocketURL);
    if (!response.ok) {
      throw new Error('Failed to fetch rockets data');
    }
    const data = await response.json();
    return data;
  },
);

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketReserve: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocketData) => (
        rocketData.id === action.payload
          ? { ...rocketData, reserved: true }
          : rocketData
      )),
    }),
    cancelReservation: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocketData) => (
        rocketData.id === action.payload
          ? { ...rocketData, reserved: false }
          : rocketData
      )),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRocketsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload.map((Item) => ({
          id: Item.id,
          name: Item.name,
          description: Item.description,
          flickr_images: Item.flickr_images,
          reserved: false,
        }));
      })
      .addCase(getRocketsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { rocketReserve, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
