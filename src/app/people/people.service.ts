import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleURL = 'api/people';

  constructor(private http: HttpClient){}

  getPersonById(id: number){
    console.log(123);
    const peopleURL = `${this.peopleURL}/${id}`;
    console.log(peopleURL)
    return this.http.get(peopleURL);
  }
  
  
  getPeople(){
    console.log(12345);
    return this.http.get('api/people');
      
  }

}