import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      {id:1, name: 'Natsu'},
      {id:2, name: 'Erza'},
      {id:3, name: 'Lucy'},
      {id:4, name: 'Gray'},
      {id:5, name: 'Happy'},
      {id:6, name: 'Juvia'}
    ]
    return {heroes}
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }

  constructor() { }
}
