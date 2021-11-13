import React from 'react';
import Checkbox from '../checkbox/checkbox';

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
  since: string,
  onSinceChangeHandler: any,
}

const Navigation = (props: NavigationProps) => {
  return (
    <nav>
      <ul className={styles.navigationList}>
        {
          buttons.map(button => {
            return (
              <li>
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
        <li>
          select
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;