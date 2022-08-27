import { Injectable } from '@angular/core';
import { InTodo } from './in-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends InTodo {

  constructor() {
    super();
    console.log('work done...!');
    this.load();
  }

  getTodos() {
    let todos = JSON.parse(localStorage.getItem(this.todoOne)!);
    return todos;
  }

  addTodo(newTodo: any) {
    let todos = JSON.parse(localStorage.getItem(this.todoOne)!);

    //todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    todos.push(newTodo);
    console.log("hello =>", newTodo);
  }
}
