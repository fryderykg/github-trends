import React from 'react';
import Navigation from './navigation/navigation';

import styles from './mainPage.module.scss';

const VMainPage = () => {
  const [since, setSince] = React.useState('daily');

  const onSinceChangeHandler = (event: Event) => {
    const {target} = event;
    if (target) setSince((target as HTMLInputElement).value);
  };

  return (
    <div className={styles.mainPage} data-testid={'mainpage_container'}>
      <header>
        <h1>
          Github Trending
        </h1>
        <Navigation since={since}
                    onSinceChangeHandler={onSinceChangeHandler}/>
      </header>
      <main>
        repo list
      </main>
    </div>
  );
};

export default VMainPage;