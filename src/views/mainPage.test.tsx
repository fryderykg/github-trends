import React from 'react';
import {render, screen} from '@testing-library/react';
import VMainPage from "./mainPage";

test('renders app container', () => {
  render(<VMainPage/>);
  const mainPageContainer = screen.getByTestId('mainpage_container');
  expect(mainPageContainer).toBeInTheDocument();
});
