import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PeopleService } from './people.service';
import { of, Observable } from 'rxjs';

@Injectable() 
export class PeopleDataResolver implements Resolve<any>{
    constructor(private peopleService: PeopleService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{ //tenemos acceso a la ruta activa
        const personId = route.params.personId
        //return of(this.peopleService.getPersonById(+personId))
        return this.peopleService.getPersonById(+personId)
    }
}