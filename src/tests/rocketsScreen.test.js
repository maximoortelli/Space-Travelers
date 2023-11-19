import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/react';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import RocketsScreen from '../components/RocketsScreen';

jest.mock('axios');

describe('Confirm that RocketsScreen renders correctly when: ', () => {
  test('store is not empty', async () => {
    const mockData = [
      {
        rocket_id: '1',
        rocket_name: 'Falcon 9',
        description: 'A reusable two-stage rocket',
        flickr_images: ['https://example.com/falcon9.png'],
      },
      {
        rocket_id: '2',
        rocket_name: 'Starship',
        description: 'A fully reusable launch vehicle',
        flickr_images: ['https://example.com/starship.png'],
      },
    ];
    axios.get.mockResolvedValue({ data: mockData });

    const mockStore = configureStore();
    const initialState = {
      // Define your initial state here based on your reducers
      rockets: {
        rocketsData: mockData,
        isLoadingRockets: false,
        error: null,
      },
    };

    const store = mockStore(initialState);

    const component = (
      <Provider store={store}>
        <RocketsScreen />
      </Provider>
    );

    const container = renderer.create(component);

    const rocketScreenTree = container.toJSON();

    await waitFor(() => {
      expect(rocketScreenTree).toMatchSnapshot();
    });
  });

  test('store is empty', async () => {
    const mockData = [];
    axios.get.mockResolvedValue({ data: mockData });

    const mockStore = configureStore();
    const initialState = {
      // Define your initial state here based on your reducers
      rockets: {
        rocketsData: mockData,
        isLoadingRockets: false,
        error: null,
      },
    };

    const store = mockStore(initialState);

    const component = (
      <Provider store={store}>
        <RocketsScreen />
      </Provider>
    );

    const container = renderer.create(component);

    const rocketScreenTree = container.toJSON();

    await waitFor(() => {
      expect(rocketScreenTree).toMatchSnapshot();
    });
  });
  test('page is loading', async () => {
    const mockData = [];
    axios.get.mockResolvedValue({ data: mockData });

    const mockStore = configureStore();
    const initialState = {
      // Define your initial state here based on your reducers
      rockets: {
        rocketsData: mockData,
        isLoadingRockets: true,
        error: null,
      },
    };

    const store = mockStore(initialState);

    const component = (
      <Provider store={store}>
        <RocketsScreen />
      </Provider>
    );

    const container = renderer.create(component);

    const rocketScreenTree = container.toJSON();

    await waitFor(() => {
      expect(rocketScreenTree).toMatchSnapshot();
    });
  });
});
