import React from 'react';
import {api, languageData, RepositoriesData} from '../models/api';
import ErrorMessage from './errorMessage/errorMessage';
import Loader from './loader/loader';
import Navigation from './navigation/navigation';
import RepositoriesList from './repositoriesList/repositoriesList';

import styles from './mainPage.module.scss';

const VMainPage = () => {
  const locallyStoredData = localStorage.getItem('githubTrendsFilters');
  const initialLanguage = locallyStoredData ? JSON.parse(locallyStoredData).language : '';
  const initialSince = locallyStoredData ? JSON.parse(locallyStoredData).since : 'daily';

  const [language, setLanguage] = React.useState<string>(initialLanguage);
  const [languagesList, setLanguagesList] = React.useState<languageData[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [repositoriesList, setRepositoriesList] = React.useState<RepositoriesData[]>([]);
  const [since, setSince] = React.useState<string>(initialSince);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  React.useEffect(() => {
    api.getLanguagesList()
      .then((languages: languageData[]) => setLanguagesList(languages))
      .catch(error => setErrorMessage(error.message));
  }, []);

  React.useEffect(() => {
    if (language && since) {
      setLoading(true);
      api.getRepositoriesList(language, since)
        .then((repositories: RepositoriesData[]) => {
          setRepositoriesList(repositories);
          localStorage.setItem('githubTrendsFilters', JSON.stringify({since, language}));
        })
        .catch(error => setErrorMessage(error.message))
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
      <ErrorMessage message={errorMessage}/>
      <main className={styles.content}>
        <h2>
          <span>Selected language: {language}</span>
          <span>Since: {since}</span>
        </h2>
        {
          loading
            ? <Loader/>
            : repositoriesList.length > 0
              ? <RepositoriesList repositoriesList={repositoriesList}/>
              : <span>No repositories found, change filters to update.</span>
        }
      </main>
    </div>
  );
};

export default VMainPage;