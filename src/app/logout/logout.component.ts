import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(
    private basicAuthenticationService: BasicAuthenticationService,
  ) { }

  ngOnInit() {
    this.basicAuthenticationService.logout();
  }
}
