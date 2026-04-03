import { PLATFORM } from 'aurelia-framework';

export class App {
  constructor() {
    this.message = 'this is my main app!';
  }

  configureRouter(config, router) {
    config.title = 'Router Test';
    config.map([
      {route: '',       name: 'home',   moduleId: PLATFORM.moduleName('index'), title: 'home'},
      {route: 'about',  name: 'about',  moduleId: PLATFORM.moduleName('about'), title: 'About'},
      {route: 'post',   name: 'post',   moduleId: PLATFORM.moduleName('post'),  title: 'post'}
    ]);
  }

}
