import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  login(usuario: string, password: string): boolean {

    if(usuario === 'admin' && password === 'admin'){
      sessionStorage.setItem('logueado','true');
      return true;
    }

    return false;
  }

  logout(){
    sessionStorage.removeItem('logueado');
  }

  isLogged(): boolean{
    return sessionStorage.getItem('logueado') === 'true';
  }

}