import React, {useState} from 'react';
import {RepositoriesData} from '../../models/api';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort, faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons';
import SingleRepo from './singleRepo/singleRepo';

import styles from './repositoriesList.module.scss';

type RepositoriesListProps = {
  repositoriesList: RepositoriesData[],
}

const RepositoriesList = (props: RepositoriesListProps) => {
  const [sortDirection, setSortDirection] = useState<string>('default')

  const onSortClickHandler = () => {
    switch (sortDirection){
      case 'default':
        setSortDirection('down');
        break;
      case 'down':
        setSortDirection('up');
        break;
      case 'up':
        setSortDirection('default');
        break;
    }
  }

  const sortTypes: {[index: string]:any} = {
    default: {
      icon: faSort,
      sortingFunction: () => 0,
    },
    down: {
      icon: faSortDown,
      sortingFunction: (a:RepositoriesData, b:RepositoriesData) => b.stars - a.stars,
    },
    up: {
      icon: faSortUp,
      sortingFunction: (a:RepositoriesData, b:RepositoriesData) => a.stars - b.stars,
    },
  }

  return (
    <div className={styles.repositoriesListContainer}
         data-testid={'component_repositoriesList_container'}>
      <header className={styles.header}>
        <div className={styles.name}>Name</div>
        <div className={styles.language}>Language</div>
        <div className={styles.stars}
             onClick={onSortClickHandler}>
          Stars
          <FontAwesomeIcon className={styles.sortIcon}
                           icon={sortTypes[sortDirection].icon}/>
        </div>
      </header>
      <ul className={styles.list}
          data-testid={'component_repositoriesList_list'}>
        {
          [...props.repositoriesList]
            .sort(sortTypes[sortDirection].sortingFunction)
            .map(repo => {
              return (
                <SingleRepo key={repo.url}
                            {...repo}/>
              )
            })
        }
      </ul>
    </div>
  );
};

export default RepositoriesList;