import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Don chevere' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombastic' },
      { id: 14, name: 'Rambo' },
      { id: 15, name: 'Magneto' },
      { id: 16, name: 'Super Man' },
      { id: 17, name: 'Chapulin' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/