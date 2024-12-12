import { Observable } from "rxjs";
import { Todo } from "../models/todo";

export interface TodosContract {
    getAll(): Observable<Todo[]>;
}