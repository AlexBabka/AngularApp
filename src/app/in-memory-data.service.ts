import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const jobs = [
      {name: 'Job1', time: new Date()},
      {name: 'Job2', time: new Date()},
      {name: 'Job3', time: new Date()},
      {name: 'Job4', time: new Date()}
    ]

    return {jobs};
  }
}
