import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDataService } from '../service/data/todo-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  username?: string = undefined;
  todoId?: number;
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoDataService,
    private hardcodedAuthenticatedService: HardcodedAuthenticationService,
    private router: Router
  ) {
    this.todo = new Todo(-1, '', false, new Date());
  }

  ngOnInit() {
    this.username = this.hardcodedAuthenticatedService.getUsername();
    if (!this.username) {
      return;
    }

    this.todoId = this.route.snapshot.params['id'];
    if (!this.todoId) {
      return;
    }

    this.todoService.retrieveTodoById(this.username, this.todoId)
      .subscribe (
        data => this.todo = data
      )
  }
  
  saveTodo(): void {
    if (!this.username || !this.todoId) {
      return;
    }
    this.todoService.updateTodoById(this.username, this.todoId, this.todo).subscribe(
      data => { console.log(data); }
    );
    this.router.navigate(['todos']);
  }
}
