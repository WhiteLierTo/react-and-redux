import React, { Component, Fragment } from "react";
import store from "./store";
import { Button, Input, List } from "antd";
import "./style/index.css";
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
      <Fragment>
        <div className="inputSty">
          <Input
            placeholder="Basic usage"
            style={{ width: "300px", marginRight: "10px" }}
            value={this.state.inputValue}
            onChange={this.inputChange}
          />
          <Button type="primary" onClick={this.submitHandle}>
            提交
          </Button>
        </div>
        <List
          className="listSty"
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.deleteItem.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
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
