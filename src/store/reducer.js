import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  // LIST_DOTO_ITEM,
} from "./actionType";

const defaultState = {
  inputValue: "毛不易",
  list: ["像我这样的人", "一程山路", "消愁", "无问"],
};

// reducer可以接收state,但绝不能修改state
export default (state = defaultState, action) => {
  /* if (action.type === LIST_DOTO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newstate.list = action.data;
    return newState;
  }*/
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, newState.inputValue];
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};
