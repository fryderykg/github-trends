import React from 'react';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app} data-testid={'app_container'}>
      initial app
    </div>
  );
}

export default App;
