import React from 'react';
import Navigation from './navigation/navigation';

import styles from './mainPage.module.scss';

const languageOptions = [
  {
    urlParam: '1c-enterprise',
    name: '1C Enterprise',
  },
  {
    urlParam: 'abap',
    name: 'ABAP',
  },
  {
    urlParam: 'abnf',
    name: 'ABNF',
  },
  {
    urlParam: 'actionscript',
    name: 'ActionScript',
  },
];

const VMainPage = () => {
  const [since, setSince] = React.useState('daily');
  const [language, setLanguage] = React.useState('');

  const onSinceChangeHandler = (event: Event) => {
    const {target} = event;
    if (target) setSince((target as HTMLInputElement).value);
  };

  const onLanguageChangeHandler = (event: Event) => {
    const {target} = event;
    if (target) setLanguage((target as HTMLSelectElement).value);
  };

  return (
    <div className={styles.mainPage}
         data-testid={'mainpage_container'}>
      <header>
        <h1>
          Github Trending
        </h1>
        <Navigation languageOptions={languageOptions}
                    onLanguageChangeHandler={onLanguageChangeHandler}
                    onSinceChangeHandler={onSinceChangeHandler}
                    selectedLanguage={language}
                    since={since}/>
      </header>
      <main>
        <h2>Selected language: {language}, since: {since}</h2>
        repo list
      </main>
    </div>
  );
};

export default VMainPage;