import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 101, name: 'Elsa' },
      { id: 102, name: 'Tresa' },
      { id: 103, name: 'Baily' },
      { id: 104, name: 'Austin' },
      { id: 105, name: 'Alice' },
      { id: 106, name: 'Thomas' },
      { id: 107, name: 'Mercy' },
      { id: 108, name: 'Dr IQ' },
      { id: 109, name: 'Magma' },
      { id: 110, name: 'Tornado' }
    ];
    return { heroes };
  }
}
