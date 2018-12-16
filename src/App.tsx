import React, { Component } from 'react';
import { observable, computed } from "mobx";
import { observer, inject } from "mobx-react";
import { ITodosStore } from "./stores/todos";
import './App.css';

interface AppComponentProps{
  todoStore? :ITodosStore
}
@observer
class App extends Component<AppComponentProps,{}> {
  @observable
  title: string = "TODO-LIST";

  @computed
  get todos (){
    const store = this.props.todoStore as ITodosStore;
    return store.todos;
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.title}</h1>
        </header>
      </div>
    );
  }
}

export default inject('todoStore')(App);
