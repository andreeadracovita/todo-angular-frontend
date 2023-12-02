import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDataService } from '../service/data/todo-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  todos: Todo[] = [];
  username?: string = undefined;

  constructor(
    private service: TodoDataService,
    private hardcodedAuthenticatedService: HardcodedAuthenticationService
  ) {}

  ngOnInit() {
    this.username = this.hardcodedAuthenticatedService.getUsername();
    if (!this.username) {
      return;
    }
    this.refreshTodos();
  }

  refreshTodos(): void {
    if (!this.username) {
      return;
    }
    this.service.retrieveAllTodos(this.username).subscribe(
      resonse => this.handleSuccessfulResponse(resonse)
    )
  }

  handleSuccessfulResponse(response: Todo[]): void {
    this.todos = response;
  }

  deleteTodoItem(id: number): void {
    if (!this.username) {
      return;
    }
    this.service.deleteTodoById(this.username, id).subscribe(
      () => {
        console.log("Successfully deleted todo with id " + id);
        this.refreshTodos();
      }
    );
  }
}
