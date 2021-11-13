import React from 'react';
import {RepositoriesData} from '../../../models/api';

import styles from './singleRepo.module.scss';


type SingleRepoProps = RepositoriesData;

const SingleRepo = (props: SingleRepoProps) => {
  return (
    <li className={styles.singleRepo}
        data-testid={'component_singleRepo_container'}>
      <div className={styles.name}>
        <img className={styles.avatar} src={props.avatar} alt={props.name}/>
        {props.name}
      </div>
      <div className={styles.language}>{props.language}</div>
      <div className={styles.stars}>{props.stars}</div>
    </li>
  );
};

export default SingleRepo;