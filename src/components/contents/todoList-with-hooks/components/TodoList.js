import React, { useState } from "react";
import {
  TodoListContainer,
  TodoItem,
  DeleteIcon,
  TodoContent,
  ShowAllButton,
  ToggleButtonContainer,
  CheckedIcon
} from "../style";

export default props => {
  const [completedfilter, setCompletedFilter] = useState(false);

  const toggleFilter = () => {
    setCompletedFilter(completedfilter => !completedfilter);
  };

  const { todos, onItemClick, onItemRemove } = props;
  const list = completedfilter ? todos.filter(todo => !todo.completed) : todos;

  return (
    <TodoListContainer>
      {list.map((todo, index) => (
        <TodoItem key={`${index}-${todo.text}`}>
          <CheckedIcon
            name={todo.completed ? "check circle outline" : "circle outline"}
          />
          <TodoContent completed={todo.completed} onClick={onItemClick(index)}>
            {todo.text}
          </TodoContent>
          <DeleteIcon name="delete" onClick={onItemRemove(index)} />
        </TodoItem>
      ))}
      <ToggleButtonContainer>
        <ShowAllButton
          color={completedfilter ? "blue" : "teal"}
          onClick={toggleFilter}
        >
          {completedfilter ? "Show all" : "Hide Completed"}
        </ShowAllButton>
      </ToggleButtonContainer>
    </TodoListContainer>
  );
};
