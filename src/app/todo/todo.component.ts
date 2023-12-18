import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  username: string | null = null;
  todoId?: number;
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoDataService,
    private basicAuthenticatedService: BasicAuthenticationService,
    private router: Router
  ) {
    this.todo = new Todo(-1, '', false, new Date());
  }

  ngOnInit() {
    this.username = this.basicAuthenticatedService.getAuthenticatedUser();
    if (!this.username) {
      return;
    }

    this.todoId = this.route.snapshot.params['id'];
    if (!this.todoId) {
      return;
    }
    this.todo.id = this.todoId;

    if (this.todoId != -1) {
      this.todoService.retrieveTodoById(this.username, this.todoId)
        .subscribe (
          data => this.todo = data
        );
    }
  }
  
  saveTodo(): void {
    if (!this.username || !this.todoId) {
      return;
    }

    if (this.todoId == -1) {
      this.todoService.addTodo(this.username, this.todo).subscribe(
        () => { this.router.navigate(['todos']); }
      );
    } else {
      this.todoService.updateTodoById(this.username, this.todoId, this.todo).subscribe(
        () => { this.router.navigate(['todos']); }
      );
    }
  }
}
