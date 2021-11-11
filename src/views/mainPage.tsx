import React from 'react';
import styles from './mainPage.module.scss';
import Checkbox from './checkbox/checkbox';

const VMainPage = () => {
  return (
    <div className={styles.mainPage} data-testid={'mainpage_container'}>
      <header>
        <h1>
          trending repos
        </h1>

        <nav>
          <ul className={styles.navigationList}>
            <li>
              <Checkbox
                name={'daily'}
                since={'daily'}
              />
            </li>
            <li>
              <Checkbox
                name={'weekly'}
                since={'weekly'}
              />
            </li>
            <li>
              <Checkbox
                name={'monthly'}
                since={'monthly'}
              />
            </li>
            <li>
              select
            </li>
          </ul>
        </nav>
      </header>
      <main>
        repo list
      </main>
    </div>
  );
};

export default VMainPage;