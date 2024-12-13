import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodosContract } from '../services/todoscontract';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges {
  todos: Todo[] | undefined;
  isFetchComplete = false
  errorMessage = ''

  constructor(@Inject('SERVICE_TOKEN') private svc: TodosContract) {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {
    this.svc
      .getAll()
      .subscribe({
        next: (response) => {
          this.todos = response
          this.errorMessage = ''
          this.isFetchComplete = true
        },
        error: (e) => {
          this.todos = undefined
          this.errorMessage = e.message
          this.isFetchComplete = true
        },
        //complete: () => { }
      })
  }
}
