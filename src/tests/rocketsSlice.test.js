import rocketsReducer, { fetchRocketsAPI } from '../redux/rockets/RocketsSlice';

test('reducers', () => {
  let store = null;
  store = rocketsReducer(undefined, fetchRocketsAPI.pending());
  expect(store.isLoadingRockets).toBe(true);
});
