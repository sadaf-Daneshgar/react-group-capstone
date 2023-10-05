import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocket/rocketsSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
