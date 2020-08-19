import React, { Component } from "react";
import store from "./store";
import { TodoListUI } from "./TodoListUI";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
} from "./store/actionCreators";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.submitHandle = this.submitHandle.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);

    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        inputChange={this.inputChange}
        submitHandle={this.submitHandle}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }

  inputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  submitHandle() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}
