import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:any
  errMsg:any
  hello="hello world"
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.service.getToDoList().subscribe({
      next: data => this.todos = data,
      error: err => this.errMsg = err
    });
  }

}
