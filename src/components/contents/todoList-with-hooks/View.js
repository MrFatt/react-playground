import React, { useState } from "react";
import {
  Section,
  Title,
  TodoList,
  TodoItem,
  DeleteIcon,
  TodoContent,
  ShowAllButton,
  ToggleButtonContainer,
  CheckedIcon
} from "./style";
import TodoInput from "./components/TodoInput";
import useTodo from "./hooks/useTodos";

export default () => {
  const [todos, addTodo, removeTodo, completeTodo] = useTodo([]);
  const [completedfilter, setCompletedFilter] = useState(false);

  const toggleFilter = () => {
    setCompletedFilter(completedfilter => !completedfilter);
  };

  return (
    <Section>
      <Title>TODO List</Title>
      <TodoInput clickHandler={addTodo} />
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
