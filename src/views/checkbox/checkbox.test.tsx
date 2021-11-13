import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Checkbox, {CheckboxProps} from './checkbox';

const params = {
  checked: false,
  disabled: false,
  name: 'daily',
  onChange: jest.fn(),
  label: 'daily',
};

const renderComponent = (data: CheckboxProps) => {
  return render(
    <Checkbox
      {...data}
    />,
  );
};

test('renders app container', () => {
  renderComponent(params)
  const checkboxContainer = screen.getByTestId('component_checkbox_container');
  expect(checkboxContainer).toBeInTheDocument();
});

test('should render proper input type', () => {
  renderComponent(params)
  const inputCheckbox = screen.getByTestId('component_checkbox_input');
  expect((inputCheckbox as HTMLInputElement).type).toEqual('checkbox');
});

test('should render proper value', () => {
  renderComponent(params)
  const inputCheckbox = screen.getByTestId('component_checkbox_input');
  expect((inputCheckbox as HTMLInputElement).value).toEqual(params.name);
});

test('should render "false" disabled state', () => {
  renderComponent(params)
  const inputCheckbox = screen.getByTestId('component_checkbox_input');
  expect((inputCheckbox as HTMLInputElement).disabled).toEqual(true);
});

test('should render "true" disabled state', () => {
  renderComponent({
    ...params,
    disabled: true,
  })
  const inputCheckbox = screen.getByTestId('component_checkbox_input');
  expect((inputCheckbox as HTMLInputElement).disabled).toEqual(true);
});

test('should render unchecked checkbox', () => {
  renderComponent(params)
  const inputCheckbox = screen.getByTestId('component_checkbox_input');
  expect((inputCheckbox as HTMLInputElement).checked).toEqual(false);
});

test('should render checked checkbox', () => {
  renderComponent({
    ...params,
    checked: true,
  })
  const inputCheckbox = screen.getByTestId('component_checkbox_input');
  expect((inputCheckbox as HTMLInputElement).checked).toEqual(true);
});

test('should render checkbox label', () => {
  renderComponent(params)
  const labelCheckbox = screen.getByTestId('component_checkbox_label');
  expect(labelCheckbox).toBeInTheDocument();
});

test('should fire onchange function', () => {
  renderComponent({
    ...params,
    checked: false,
  })
  const labelCheckbox = screen.getByTestId('component_checkbox_label');
  fireEvent.click(labelCheckbox);
  expect(params.onChange).toHaveBeenCalledTimes(1);
});

test('should not fire onchange function', () => {
  renderComponent({
    ...params,
    checked: false,
    disabled: true,
  })
  const labelCheckbox = screen.getByTestId('component_checkbox_label');
  fireEvent.click(labelCheckbox);
  expect(params.onChange).toHaveBeenCalledTimes(1);
});