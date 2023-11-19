import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    // HERE ADD YOUR SLICE (don't forget to export using default .reducer)
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
