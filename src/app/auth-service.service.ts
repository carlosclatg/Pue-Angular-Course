import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _isLoggedIn = false
  constructor(private router: Router){}

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
    this.router.navigateByUrl('/home') //para que cuando hacemos logout nos lleve a home y no se queden los datos en pantalla
  }
}
