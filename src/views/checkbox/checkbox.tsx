import React from 'react';
import styles from './checkbox.module.scss';

type CheckboxProps = {
  since: string,
  name: string,
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <div className={styles.checkboxContainer}
         data-testid={'checkbox_container'}>

      <label htmlFor={props.name}>
        <input type="checkbox" name={props.name}/>
        <span>{props.name}</span>
      </label>
    </div>
  );
};

export default Checkbox;