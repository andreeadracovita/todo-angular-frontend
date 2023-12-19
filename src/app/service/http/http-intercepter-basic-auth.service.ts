import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtAuthenticationService } from '../jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private jwtAuthenticationService: JwtAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = this.jwtAuthenticationService.getAuthenticatedToken();
    let username = this.jwtAuthenticationService.getAuthenticatedUser();
    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
