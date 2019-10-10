import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { loadavg } from 'os';

export class CustomRoutePreloader implements PreloadingStrategy{

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if(route.data && route.data.pepePreload){
            return load()
        } else {
            return of(null)
        }
    }


}
