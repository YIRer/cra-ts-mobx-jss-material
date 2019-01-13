import { observable } from 'mobx';

type Itodos = Object[];

export type ITodosStore = {
  todos: Itodos;
};
export class TodoStore {
  @observable
  todos: Itodos = [];
}
const todoStore = new TodoStore();
export default todoStore;
