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
        <input checked={props.checked}
               data-testid={'component_checkbox_input'}
               disabled={props.disabled}
               id={props.name}
               name={props.name}
               onChange={props.onChange}
               type="checkbox"
               value={props.name}
        />
        <label htmlFor={props.name}
               data-testid={'component_checkbox_label'}>
          {props.label}
        </label>
      </label>
    </div>
  );
};

export default Checkbox;