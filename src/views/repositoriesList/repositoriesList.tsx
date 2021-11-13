import React from 'react';
import {repositoriesData} from '../../models/api';

type RepositoriesListProps = {
  repositoriesList: repositoriesData[],
}

const RepositoriesList = (props: RepositoriesListProps) => {
  return (
    <div>
      {
        props.repositoriesList.map(repo => {
          return (
            <div key={repo.name}>
              <span>Name: {repo.name}</span>&nbsp;
              <span>Language: {repo.language}</span>&nbsp;
              <span>Stars: {repo.stars}</span>&nbsp;
            </div>
          )
        })
      }
    </div>
  );
};

export default RepositoriesList;