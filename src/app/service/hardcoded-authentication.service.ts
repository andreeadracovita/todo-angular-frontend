import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === 'aracovita' && password === 'pass') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  getUsername() {
    const user = sessionStorage.getItem('authenticatedUser');
    if (user) {
      return user;
    }
    return undefined;
  }

  logout(): void {
    sessionStorage.removeItem('authenticatedUser');
  }
}
