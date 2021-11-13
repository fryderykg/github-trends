import React from 'react';
import {render, screen} from '@testing-library/react';
import SingleRepo, {} from './singleRepo';
import {RepositoriesData} from '../../../models/api';

const params =
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
  };

const renderComponent = (data: RepositoriesData) => {
  return render(
    <SingleRepo
      {...data}
    />,
  );
};

test('renders singleRepo container', () => {
  renderComponent(params)
  const singleRepoContainer = screen.getByTestId('component_singleRepo_container');
  expect(singleRepoContainer).toBeInTheDocument();
});

test('renders singleRepo name', () => {
  renderComponent(params)
  const name = screen.getByText(params.name);
  expect(name).toBeInTheDocument();
});

test('renders singleRepo avatar', () => {
  renderComponent(params)
  const avatar = screen.getByRole('img');
  expect(avatar).toBeInTheDocument();
  expect(avatar).toHaveAttribute('src', params.avatar);
  expect(avatar).toHaveAttribute('alt', params.name);
});

test('renders singleRepo language', () => {
  renderComponent(params)
  const language = screen.getByText(params.language);
  expect(language).toBeInTheDocument();
});

test('renders singleRepo stars', () => {
  renderComponent(params)
  const stars = screen.getByText(params.stars);
  expect(stars).toBeInTheDocument();
});