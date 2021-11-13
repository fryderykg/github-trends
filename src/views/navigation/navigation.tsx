import React from 'react';
import Checkbox from '../checkbox/checkbox';
import Select from '../select/select';

import {languageData} from '../../models/api';

import styles from './navigation.module.scss';

const buttons = [
  {
    name: 'daily',
    label: 'Daily',
  },
  {
    name: 'weekly',
    label: 'Weekly',
  },
  {
    name: 'monthly',
    label: 'Monthly',
  },
];

type NavigationProps = {
  languageOptions: languageData[],
  onLanguageChangeHandler: any,
  onSinceChangeHandler: any,
  selectedLanguage: string,
  since: string,
}

const Navigation = (props: NavigationProps) => {
  return (
    <nav>
      <ul className={styles.navigationList}>
        {
          buttons.map(button => {
            return (
              <li className={styles.checkboxElement}
                  key={button.name}>
                <Checkbox
                  checked={props.since === button.name}
                  disabled={false}
                  label={button.label}
                  name={button.name}
                  onChange={props.onSinceChangeHandler}
                />
              </li>
            )
          })
        }
        <li className={styles.selectElement}
            key={'language_select'}>
          <Select disabled={false}
                  id={'languages'}
                  label={'Select language'}
                  name={'languages'}
                  onChange={props.onLanguageChangeHandler}
                  options={props.languageOptions}
                  placeholder={'Select language'}
                  value={props.selectedLanguage}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;