import React, { useState } from "react";
import {
  Section,
  Title,
  AddTODOContainer,
  AddButton,
  RemoveButton,
  TodoList,
  TodoItem,
  TodoInput,
  DeleteIcon,
  TodoContent,
  ShowAllButton,
  ShowCompletedButton,
  ShowUncompletedButton,
  ToggleButtonContainer,
  CheckedIcon
} from "./style";

import useTodo from "./hooks/useTodos";

export default () => {
  const [todos, addTodo, removeTodo, completeTodo] = useTodo([]);
  const [text, setText] = useState("");
  const [completedfilter, setCompletedFilter] = useState(false);

  const toggleFilter = () => {
    setCompletedFilter(completedfilter => !completedfilter);
  };

  const addTodoHandler = () => {
    addTodo(text);
    setText("");
  };

  return (
    <Section>
      <Title>TODO List</Title>
      <AddTODOContainer>
        <TodoInput
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
        />
        <AddButton onClick={addTodoHandler}>Add</AddButton>
      </AddTODOContainer>
      <TodoList>
        {completedfilter
          ? todos
              .filter(todo => todo.completed === false)
              .map((todo, index) => (
                <TodoItem key={`${index}-${todo.text}`}>
                  {todo.completed ? (
                    <CheckedIcon name="check circle outline" />
                  ) : (
                    <CheckedIcon name="circle outline" />
                  )}
                  <TodoContent
                    completed={todo.completed}
                    onClick={completeTodo(index)}
                  >
                    {todo.text}
                  </TodoContent>
                  <DeleteIcon name="delete" onClick={removeTodo(index)} />
                </TodoItem>
              ))
          : todos.map((todo, index) => (
              <TodoItem key={`${index}-${todo.text}`}>
                {todo.completed ? (
                  <CheckedIcon name="check circle outline" />
                ) : (
                  <CheckedIcon name="circle outline" />
                )}
                <TodoContent
                  completed={todo.completed}
                  onClick={completeTodo(index)}
                >
                  {todo.text}
                </TodoContent>
                <DeleteIcon name="delete" onClick={removeTodo(index)} />
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
      </TodoList>
    </Section>
  );
};
