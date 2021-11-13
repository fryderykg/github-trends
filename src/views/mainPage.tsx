import React from 'react';
import {api, languageData, repositoriesData} from '../models/api';
import Loader from './loader/loader';
import Navigation from './navigation/navigation';

import styles from './mainPage.module.scss';

const VMainPage = () => {
  const [language, setLanguage] = React.useState<string>('');
  const [languagesList, setLanguagesList] = React.useState<languageData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [repositoriesList, setRepositoriesList] = React.useState<repositoriesData[]>([]);
  const [since, setSince] = React.useState<string>('daily');

  React.useEffect(() => {
    api.getLanguagesList()
      .then((languages: languageData[]) => setLanguagesList(languages))
      .catch(error => console.log('error', error));
  }, []);

  React.useEffect(() => {
    if (language && since) {
      setLoading(true);
      api.getRepositoriesList(language, since)
        .then((repositories: repositoriesData[]) => setRepositoriesList(repositories))
        .catch(error => console.log('error', error))
        .finally(() => setLoading(false));
    }
  }, [since, language]);

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
        <Navigation disabled={loading}
                    onLanguageChangeHandler={onLanguageChangeHandler}
                    onSinceChangeHandler={onSinceChangeHandler}
                    languageOptions={languagesList}
                    selectedLanguage={language}
                    since={since}/>
      </header>
      <main>
        <h2>Selected language: {language}, since: {since}</h2>

        {
          loading && <Loader/>
        }
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