import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _isLoggedIn = false

  isLoggedIn(){
    return this._isLoggedIn
  } 

  login () {
    console.log(true)
    this._isLoggedIn = true
  }
  logout () {
    console.log(false)
    this._isLoggedIn = false
  }
}
