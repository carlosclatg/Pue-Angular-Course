import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    const people = [
      {
        id: 1,
        name: 'Greter'
      },
      {
        id: 2,
        name: 'Carla'
      }
    ] 

    return {people}
  }


}
