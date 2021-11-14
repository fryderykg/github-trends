import React from 'react';

import styles from  './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}
         data-testid={'loader_container'}>
      <div className={styles.loader}/>
    </div>
  );
};

export default Loader;