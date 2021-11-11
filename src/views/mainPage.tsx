import React from 'react';
import styles from './mainPage.module.scss';

const VMainPage = () => {
  return (
    <div className={styles.mainPage} data-testid={'mainpage_container'}>
      trending repos
    </div>
  );
};

export default VMainPage;