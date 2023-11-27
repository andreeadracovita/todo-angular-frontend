import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
    
  }
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todos = [
    new Todo(1, 'Learn Angular', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Run a marathon', false, new Date())
  ]
}
