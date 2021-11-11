import React from 'react';
import styles from './app.module.scss';
import VMainPage from "./views/mainPage";

function App() {
  return (
    <div className={styles.app} data-testid={'app_container'}>
      <VMainPage/>
    </div>
  );
}

export default App;
