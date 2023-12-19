import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(
    private jwtAuthenticationService: JwtAuthenticationService,
  ) { }

  ngOnInit() {
    this.jwtAuthenticationService.logout();
  }
}
