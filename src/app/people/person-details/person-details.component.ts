import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  persona2: any;
  showDetails: boolean;

  constructor( 
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }
  
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
      .pipe(
        takeUntil(this.onDestroy)
      )
      .subscribe(ResolverData => {  
        console.log(ResolverData)
        if(ResolverData.person){
          this.person=ResolverData.person
        } else {
          this.router.navigateByUrl('/home')
          .then(console.log)
        }
        this.showDetails = ResolverData.showDetails 
      })
    
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
