import React from 'react';
import {fireEvent, getByRole, render, screen} from '@testing-library/react';
import RepositoriesList from './repositoriesList';
import {RepositoriesData} from '../../models/api';

const params = [
  {
    "author": "checkstyle",
    "name": "checkstyle",
    "avatar": "https://github.com/checkstyle.png",
    "url": "https://github.com/checkstyle/checkstyle",
    "description": "Checkstyle is a development tool to help programmers write Java code that adheres to a coding standard. By default it supports the Google Java Style Guide and Sun Code Conventions, but is highly configurable. It can be invoked with an ANT task and a command line program.",
    "language": "Java",
    "languageColor": "#b07219",
    "stars": 6361,
    "forks": 8046,
    "currentPeriodStars": 26,
    "builtBy": [{
      "username": "romani",
      "href": "https://github.com/romani",
      "avatar": "https://avatars.githubusercontent.com/u/812984"
    },]
  },
  {
    "author": "codyseibert",
    "name": "youtube",
    "avatar": "https://github.com/codyseibert.png",
    "url": "https://github.com/codyseibert/youtube",
    "description": "code from my youtube channel",
    "language": "CSS",
    "languageColor": "#563d7c",
    "stars": 117,
    "forks": 231,
    "currentPeriodStars": 3,
    "builtBy": [
      {
        "username": "codyseibert",
        "href": "https://github.com/codyseibert",
        "avatar": "https://avatars.githubusercontent.com/u/1868782"
      }
    ]
  }
];

const renderComponent = (data: RepositoriesData[]) => {
  return render(
    <RepositoriesList
      repositoriesList={data}
    />,
  );
};

test('render RepositoriesList container', () => {
  renderComponent(params)
  const singleRepoContainer = screen.getByTestId('component_repositoriesList_container');
  expect(singleRepoContainer).toBeInTheDocument();
});

test('sort elements descending', () => {
  renderComponent(params)
  const starsHeader = screen.getByText('Stars');
  fireEvent.click(starsHeader);
  const items = screen.getAllByTestId('component_singleRepo_container');
  expect(items[0]).toHaveTextContent('checkstyle');
  expect(items[1]).toHaveTextContent('youtube');
  const icon = getByRole(starsHeader, 'img', {hidden: true});
  expect(icon).toHaveClass('fa-sort-down');
});

test('sort elements ascending', () => {
  renderComponent(params)
  const starsHeader = screen.getByText('Stars');
  fireEvent.click(starsHeader);
  fireEvent.click(starsHeader);
  const items = screen.getAllByTestId('component_singleRepo_container');
  expect(items[0]).toHaveTextContent('youtube');
  expect(items[1]).toHaveTextContent('checkstyle');
  const icon = getByRole(starsHeader, 'img', {hidden: true});
  expect(icon).toHaveClass('fa-sort-up');
});

test('back to default sorting', () => {
  renderComponent(params)
  const starsHeader = screen.getByText('Stars');
  fireEvent.click(starsHeader);
  fireEvent.click(starsHeader);
  fireEvent.click(starsHeader);
  const items = screen.getAllByTestId('component_singleRepo_container');
  expect(items[0]).toHaveTextContent('checkstyle');
  expect(items[1]).toHaveTextContent('youtube');
  const icon = getByRole(starsHeader, 'img', {hidden: true});
  expect(icon).toHaveClass('fa-sort');
});