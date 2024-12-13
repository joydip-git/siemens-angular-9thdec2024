import { Component, Inject, OnInit } from '@angular/core';
import { TodosContract } from '../../services/todoscontract';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  todos: Todo[] | undefined;
  isFetchComplete = false
  errorMessage = ''

  constructor(@Inject('SERVICE_TOKEN') private svc: TodosContract) {

  }

  ngOnInit(): void {
    this.showPosts()
  }

  showPosts() {
    this.svc
      .getAll()
      .subscribe({
        next: (response) => {
          this.todos = response.splice(0, 5)
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
