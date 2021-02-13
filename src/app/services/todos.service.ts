import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TodoModel } from '../models/todo.model';

@Injectable()
export class TodosService {
  private todosUrl: string = 'https://jsonplaceholder.typicode.com/todos?userId=';
  constructor(
    private http: HttpClient
  ) { }

    getTodoByUserId(userId): Observable<TodoModel[]> {
        return this.http.get<TodoModel[]>(this.todosUrl + userId);
    }

}