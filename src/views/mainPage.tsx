import React from 'react';
import Navigation from './navigation/navigation';
import {api, languageData, repositoriesData} from '../models/api';

import styles from './mainPage.module.scss';

const VMainPage = () => {
  const [since, setSince] = React.useState<string>('daily');
  const [languagesList, setLanguagesList] = React.useState<languageData[]>([]);
  const [repositoriesList, setRepositoriesList] = React.useState<repositoriesData[]>([]);
  const [language, setLanguage] = React.useState<string>('');

  React.useEffect(() => {
    api.getLanguagesList()
      .then((languages) => setLanguagesList(languages))
      .catch(error => console.log('error', error))
  },[]);

  React.useEffect(() => {
    if (language && since) {
      api.getRepositoriesList(language, since)
        .then((repositories) => setRepositoriesList(repositories))
        .catch(error => console.log('error', error))
    }
  },[since, language]);

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
      <header className={styles.header}>
        <h1>
          Github Trending
        </h1>
        <Navigation languageOptions={languagesList}
                    onLanguageChangeHandler={onLanguageChangeHandler}
                    onSinceChangeHandler={onSinceChangeHandler}
                    selectedLanguage={language}
                    since={since}/>
      </header>
      <main>
        <h2>Selected language: {language}, since: {since}</h2>
        {
          repositoriesList.map(repo => {
            return (
              <div key={repo.name}>
                <span>Name: {repo.name}</span>&nbsp;
                <span>Language: {repo.language}</span>&nbsp;
                <span>Stars: {repo.stars}</span>&nbsp;
              </div>
            )
          })
        }
      </main>
    </div>
  );
};

export default VMainPage;