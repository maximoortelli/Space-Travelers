import renderer from 'react-test-renderer';
import React from 'react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Header from '../components/Header';

test('Confirm that the header is displayed correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  const headerTree = component.toJSON();
  expect(headerTree).toMatchSnapshot();
});
