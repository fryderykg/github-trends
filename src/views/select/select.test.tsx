import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Select, {SelectProps} from './select';

const params = {
  disabled: false,
  id: 'languages',
  label: 'languages',
  name: 'languages',
  options: [
    {
      urlParam: '1c-enterprise',
      name: '1C Enterprise',
    },
    {
      urlParam: 'abap',
      name: 'ABAP',
    },
  ],
  onChange: jest.fn(),
  placeholder: 'Select language',
  value: 'abap',
};

const renderComponent = (data: SelectProps) => {
  return render(
    <Select
      {...data}
    />,
  );
};

test('renders select container', () => {
  renderComponent(params);
  const selectContainer = screen.getByTestId('component_select_container');
  expect(selectContainer).toBeInTheDocument();
});

test('should have correct value', () => {
  renderComponent(params);
  const select = screen.getByTestId('component_select');
  expect((select as HTMLSelectElement).value).toEqual(params.value);
});

test('should render options', () => {
  renderComponent(params);
  const options = screen.getAllByTestId('component_select_option');
  expect(options.length).toEqual(params.options.length);
  options.forEach((el, index) => {
    expect((el as HTMLOptionElement).value).toEqual(params.options[index]['urlParam']);
  });
});

test('should execute onChange function', () => {
  renderComponent(params);
  const select = screen.getByTestId('component_select');
  fireEvent.change(select, { target: { value: params.options[1].urlParam } });
  expect(params.onChange).toHaveBeenCalledTimes(1);
});

test('test option selection', () => {
  renderComponent(params);
  const selectionIndex = 1;
  const select = screen.getByTestId('component_select');
  fireEvent.click(select, { target: { value: params.options[selectionIndex].urlParam } });
  const options = screen.getAllByTestId('component_select_option');
  options.forEach((el, index) => {
    if (index === selectionIndex) {
      expect((options[index] as HTMLOptionElement).selected).toBeTruthy();
    } else {
      expect((options[index] as HTMLOptionElement).selected).toBeFalsy();
    }
  });
});