import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people = [
    {
      id: 1,
      name: 'Greter'
    },
    {
      id: 2,
      name: 'Carla'
    }
  ]

  //constructor() { }


  getPersonById(id: number): Observable<{}>{
    return of(this.people.find(p => p.id === id));
  }


  getPeople(){
    return of(this.people)
  }


}
