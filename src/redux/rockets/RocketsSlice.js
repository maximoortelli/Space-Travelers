import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocketsAPI = createAsyncThunk(
  'rockets/fetchRocketsAPI',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const initialState = {
  rocketsData: [],
  isLoadingRockets: true,
  error: null,
};

const RocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (store, action) => {
      const rocketId = action.payload;
      const updatedList = store.rocketsData.map((rocket) => {
        if (rocket.rocket_id !== rocketId) {
          return rocket;
        }
        return { ...rocket, isReserved: true };
      });
      store.rocketsData = updatedList;
    },
    cancelReservation: (store, action) => {
      const rocketId = action.payload;
      const updatedList = store.rocketsData.map((rocket) => {
        if (rocket.rocket_id !== rocketId) {
          return rocket;
        }
        return { ...rocket, isReserved: false };
      });
      store.rocketsData = updatedList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsAPI.pending, (store) => {
        store.isLoadingRockets = true;
      })
      .addCase(fetchRocketsAPI.fulfilled, (store, action) => {
        const rocketsWithReservation = action.payload.map((rocket) => ({
          ...rocket,
          isReserved: false,
        }));
        store.rocketsData = rocketsWithReservation;
        store.isLoadingRockets = false;
      })
      .addCase(fetchRocketsAPI.rejected, (store, action) => {
        store.error = action.payload;
        store.isLoadingRockets = false;
      });
  },
});

export const { reserveRocket, cancelReservation } = RocketsSlice.actions;

export default RocketsSlice.reducer;
