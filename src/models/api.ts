export type languageData = {
  urlParam: string,
  name: string,
};

export type repositoriesData = {
  "author": string,
  "name": string,
  "avatar": string,
  "url": string,
  "description": string,
  "language": string,
  "languageColor": string,
  "stars": number,
  "forks": number,
  "currentPeriodStars": number,
  "builtBy": [
    {
      "href": string,
      "avatar": string,
      "username": string,
    }
  ]
};

class Api {
  constructor() {}

  private getData = (query: String): Promise<any> => {
    return new Promise((resolve, reject) => {
      const URL = `http://localhost:8000/${query}`
      fetch(URL)
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
  }

  getLanguagesList = (): Promise<languageData[]> => {
    return new Promise((resolve, reject) => {
      this.getData('languages')
        .then(languages => resolve(languages))
        .catch(error => reject(error));
    })
  }

  getRepositoriesList = (language: string, since: string): Promise<repositoriesData[]> => {
    return new Promise((resolve, reject) => {
      this.getData(`repositories?language=${language}&since=${since}`)
        .then(repositories => resolve(repositories))
        .catch(error => reject(error));
    })
  };
}

export const api = new Api();