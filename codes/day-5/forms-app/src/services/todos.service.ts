import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodosContract } from './todoscontract';
import { Todo } from '../models/todo';

//@Injectable({ providedIn: 'root' })
@Injectable()
export class TodosService implements TodosContract {
    private url = 'https://jsonplaceholder.typicode.com/todos'

    constructor(private http: HttpClient) {

    }
    getAll() {
        return this.http.get<Todo[]>(this.url)
    }
}