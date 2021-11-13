import React from 'react';
import styles from './checkbox.module.scss';

export type CheckboxProps = {
  checked: boolean,
  disabled: boolean,
  label: string,
  name: string,
  onChange: any,
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <div className={styles.checkboxContainer}
         data-testid={'component_checkbox_container'}>

      <label htmlFor={props.name}>
        <input
          data-testid={'component_checkbox_input'}
          id={props.name}
          name={props.name}
          type="checkbox"
          value={props.name}
        />
        <label htmlFor={props.name}>
          {props.label}
        </label>
      </label>
    </div>
  );
};

export default Checkbox;