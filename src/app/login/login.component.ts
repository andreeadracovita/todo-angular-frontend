import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = 'aracovita';
  password: string = '';
  errorMessage: string = 'Invalid credentials!';
  invalidLogin: boolean = false;

  // Dependency Injection
  constructor(
    private router: Router,
    private jwtAuthenticationService: JwtAuthenticationService,
    ) { }

  handleJwtAuthLogin() {
    this.jwtAuthenticationService.executeJwtAuthenticationService(this.username, this.password)
      .subscribe(
        () => {
          this.router.navigate(['welcome/' + this.username]);
          this.invalidLogin = false;
        },
        () => {
          this.invalidLogin = true;
        }
      );
  }
}
