import React from 'react';
import {RepositoriesData} from '../../models/api';
import SingleRepo from './singleRepo/singleRepo';

import styles from './repositoriesList.module.scss';

type RepositoriesListProps = {
  repositoriesList: RepositoriesData[],
}

const RepositoriesList = (props: RepositoriesListProps) => {
  return (
    <div className={styles.repositoriesListContainer}>
      <header className={styles.header}>
        <div className={styles.name}>Name</div>
        <div className={styles.language}>Language</div>
        <div className={styles.stars}>Stars</div>
      </header>
      {
        props.repositoriesList.map(repo => {
          return (
            <SingleRepo key={repo.name}
                        {...repo}/>
          )
        })
      }
    </div>
  );
};

export default RepositoriesList;