import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, UrlSegment, Route } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
  
  canLoad(route: Route, segments: UrlSegment[]) {
    return this.authService.isLoggedIn();
  }

  constructor(private authService: AuthServiceService){}

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.authService.isLoggedIn();
  }
  
}
