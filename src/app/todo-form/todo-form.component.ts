import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service'
//import $ from "jquery";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoData: any[] = [];
  todoForm: FormGroup;
  statusData: any = ['Active', 'Closed', 'Archived'];
  constructor(private todoService: TodoService) {
    this.todoForm = new FormGroup({
      'title': new FormControl('ToDo', Validators.required),
      'assign_date': new FormControl(''),
      'due_date': new FormControl(''),
      'status': new FormControl(Validators.required)
    });
  }

  ngOnInit(): void {
    this.todoData = this.todoService.getTodos();
    console.log(this.todoData);

  }

  OnSubmit() {
    const data = this.todoForm.getRawValue();
    console.log(data);
    //console.log(this.todoForm.value);
    let newTodo = this.todoForm.value
    console.log(newTodo);
    const allTodo = this.todoData.push({ newTodo: newTodo })
    console.log(allTodo);
    //this.todoService.addTodo(newTodo);

  }

  onReset() {
    this.todoForm.reset();
  }

}
