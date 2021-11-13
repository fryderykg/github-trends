import React from 'react';
import classNames from 'classnames';
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
    <label className={classNames(styles.checkboxContainer, {
      [styles.isActive]: props.checked,
    })}
           data-testid={'component_checkbox_container'}
           htmlFor={props.name}>
      <input checked={props.checked}
             className={styles.checkbox}
             data-testid={'component_checkbox_input'}
             disabled={props.disabled}
             id={props.name}
             name={props.name}
             onChange={props.onChange}
             type="checkbox"
             value={props.name}
      />
      <label className={styles.label}
             htmlFor={props.name}
             data-testid={'component_checkbox_label'}>
        {props.label}
      </label>
    </label>
  );
};

export default Checkbox;