import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app container', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app_container');
  expect(appContainer).toBeInTheDocument();
});
