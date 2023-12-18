import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodoById(username: string, id: number) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodoById(username: string, id: number) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodoById(username: string, id: number, todo: Todo) {
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  addTodo(username: string, todo: Todo) {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }
}
