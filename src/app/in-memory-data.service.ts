import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const jobs = [
      {name: 'Job1', description: 'Very important Job1', time: new Date(), state: 'Active'},
      {name: 'Job2', description: 'Very important Job2', time: new Date(), state: 'Active'},
      {name: 'Job3', description: 'Very important Job3', time: new Date(), state: 'Paused'},
      {name: 'Job4', description: 'Very important Job4', time: new Date(), state: 'Active'},
      {name: 'Job5', description: 'Very important Job5', time: new Date(), state: 'Active'},
      {name: 'Job6', description: 'Very important Job6', time: new Date(), state: 'Active'},
      {name: 'Job7', description: 'Very important Job7', time: new Date(), state: 'Active'},
      {name: 'Job8', description: 'Very important Job8', time: new Date(), state: 'Active'},
      {name: 'Job9', description: 'Very important Job9', time: new Date(), state: 'Active'},
      {name: 'Job10', description: 'Very important Job10', time: new Date(), state: 'Active'},
      {name: 'Job11', description: 'Very important Job11', time: new Date(), state: 'Active'},
      {name: 'Job12', description: 'Very important Job12', time: new Date(), state: 'Active'},
      {name: 'Job13', description: 'Very important Job13', time: new Date(), state: 'Active'},
      {name: 'Job14', description: 'Very important Job14', time: new Date(), state: 'Active'}
    ];

    return {jobs};
  }
}
