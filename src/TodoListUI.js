import React from "react";
import { Button, Input, List } from "antd";
import "./style/index.css";

export const TodoListUI = (props) => {
  const { inputValue, inputChange, submitHandle, list, deleteItem } = props;

  return (
    <div>
      <div className="inputSty">
        <Input
          placeholder="Basic usage"
          style={{ width: "300px", marginRight: "10px" }}
          value={inputValue}
          onChange={inputChange}
        />
        <Button type="primary" onClick={submitHandle}>
          提交
        </Button>
      </div>
      <List
        className="listSty"
        size="small"
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item
            onClick={(index) => {
              deleteItem(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};
