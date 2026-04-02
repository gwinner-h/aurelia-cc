import { Todo } from './todo';

export class App {
  constructor() {
    this.message = 'Hello World!';
    this.todo = new Todo('Learn Aurelia');
    this.todo.done = true
  }
}
