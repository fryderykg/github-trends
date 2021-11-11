import React from 'react';
import {render, screen} from '@testing-library/react';
import Checkbox from './checkbox';

test('renders app container', () => {
  render(<Checkbox name={'daily'} since={'daily'}/>);
  const checkboxContainer = screen.getByTestId('checkbox_container');
  expect(checkboxContainer).toBeInTheDocument();
});
