import React from 'react';
import {render, screen} from '@testing-library/react';
import ErrorMessage from './errorMessage';

const message = 'Test error message';

test('renders errorMessage component', () => {
  render(<ErrorMessage message={message}/>);
  const errorMessage = screen.getByText(message);
  const errorMessageContainer = screen.queryByTestId('errorMessage');
  expect(errorMessage).toBeInTheDocument();
  expect(errorMessageContainer).toBeInTheDocument();
});

test('do not renders errorMessage component', () => {
  render(<ErrorMessage message={''}/>);
  const errorMessageContainer = screen.queryByTestId('errorMessage');
  expect(errorMessageContainer).not.toBeInTheDocument();
});
