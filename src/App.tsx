import React, { Component } from 'react';
import { observable, computed } from 'mobx';
import { observer, inject } from 'mobx-react';
import { ITodosStore } from './stores/todos';
import Todos from './Components/View/Todos';
interface AppComponentProps {
  todoStore?: ITodosStore;
}
@observer
class App extends Component<AppComponentProps, {}> {
  @observable
  title: string = 'TODO-LIST';

  @computed
  get todos() {
    const store = this.props.todoStore as ITodosStore;
    return store.todos;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.title}</h1>
        </header>
        <Todos />
      </div>
    );
  }
}

export default inject('todoStore')(App);
