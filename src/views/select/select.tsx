import React from 'react';

import styles from './select.module.scss';
import {languageData} from '../../models/api';

export type SelectProps = {
  disabled: boolean,
  id: string,
  label: string,
  name: string,
  onChange: any,
  placeholder: string,
  options: languageData[],
  value: string
};

const Select = (props: SelectProps) => {
  return (
    <div className={styles.select_container} data-testid={'component_select_container'}>
      <label htmlFor={props.id}>
        {props.label}:
      </label>
      <select data-testid={'component_select'}
              id={props.id}
              name={props.name}
              onChange={props.onChange}
              placeholder={props.placeholder}
              value={props.value}
      >
        <option key={'default_option'}
                value={''}>
          {props.placeholder}
        </option>
        {
          props.options.map(option => (
            <option data-testid={'component_select_option'}
                    key={option.urlParam}
                    value={option.urlParam}>
              {option.name}
            </option>
          ))
        }
      </select>
    </div>
  );
};

export default Select;