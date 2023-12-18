import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private router: Router,
    private basicAuthenticatedService: BasicAuthenticationService
  ) { }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    if (this.basicAuthenticatedService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
