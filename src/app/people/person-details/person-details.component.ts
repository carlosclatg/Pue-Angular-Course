import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute, Route } from '@angular/router';
import {switchMap, takeUntil} from 'rxjs/operators';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';




@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})

export class PersonDetailsComponent implements OnInit, OnDestroy {
  
  person;
  onDestroy = new Subject(); //para liberar memoria

  constructor(private peopleService: PeopleService, private activeRoute: ActivatedRoute,
    private location: Location) { }
  
  goBack(): void {
    this.location.back();
  }
  
  ngOnDestroy(): void {
    console.log('In method on PersonDetailsComponent destroy')
    this.onDestroy.next(); //emite un evento para capturarlo como observable
    this.onDestroy.complete(); //se cierra a misma la propiedad.
  }

  ngOnInit() {
    
    this.activeRoute.data
      .subscribe(person => this.person= person)
    
    /**
     * this.activeRoute.params.subscribe(params => {
      this.peopleService.getPersonById(+params.personId).subscribe(person => {
        this.person = person;
      })
    })
    
    //http://localhost:4200/people/2?finish=true (El  finish= true es un queryParams)


    this.activeRoute.queryParams.subscribe(console.log) //printea finist true

    this.activeRoute.params
      .pipe( //El pipe, lo que haces es un poner una serie de funciones a ejecutar en serie sobre los datos de entrada.
        takeUntil(this.onDestroy), //subscribete hasta this.onDEstroy emita un evento.
        switchMap(params => this.peopleService.getPersonById(+params.personId))
      )
      .subscribe(person => {
        this.person= person
      })

      */
  }

  

}
