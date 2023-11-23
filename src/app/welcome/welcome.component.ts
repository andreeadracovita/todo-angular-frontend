import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  name: string = '';
  // ActivatedRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }
}
