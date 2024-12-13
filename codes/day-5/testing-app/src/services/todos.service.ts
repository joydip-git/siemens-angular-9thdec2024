import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodosContract } from './todoscontract';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

//@Injectable({ providedIn: 'root' })
@Injectable()
export class TodosService implements TodosContract {
    private url = 'https://jsonplaceholder.typicode.com/todos'

    constructor(private http: HttpClient) {

    }
    getAll(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.url)
    }
}