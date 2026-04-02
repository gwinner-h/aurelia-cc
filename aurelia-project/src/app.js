import { Todo } from './todo'

export class App {
  constructor() {
    this.message = 'this is my main app!'
    this.todoList = []
    this.todoList.push(new Todo('Learn Aurelia'))
    this.todoList.push(new Todo('learn how to strikethrough?'))
    this.todoList.push(new Todo('did we fail or what fam?'))
    this.newItem = ''
  }

  configureRouter(config, router) {
    config.title = 'Router Test';
    config.map([
      {route: '', name: 'home', moduleId: 'index', title: 'home'}
    ]);
  }

  addTodo() {
    this.todoList.push(new Todo(this.newItem))
    this.newItem = ''
  }

  removeTodo(todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1)
  }
}
