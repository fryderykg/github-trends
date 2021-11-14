import React from 'react';
import {render, screen} from '@testing-library/react';
import Loader from './loader';

test('renders loader container', () => {
  render(<Loader/>);
  const loaderContainer = screen.getByTestId('loader_container');
  expect(loaderContainer).toBeInTheDocument();
});
