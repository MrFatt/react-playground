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

export default () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [completedfilter, setCompletedFilter] = useState(false);
  const addTodo = () => {
    setTodos(todos => [...todos, { text: text, completed: false }]);
    setText("");
  };

  const removeTodo = index => () => {
    setTodos(todos => [
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length)
    ]);
  };

  const completeTodo = index => () => {
    setTodos(todos => {
      const selectedTodo = todos[index];
      return [
        ...todos.slice(0, index),
        { text: selectedTodo.text, completed: !selectedTodo.completed },
        ...todos.slice(index + 1, todos.length)
      ];
    });
  };

  const toggleFilter = () => {
    setCompletedFilter(completedfilter => !completedfilter);
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
        <AddButton onClick={addTodo}>Add</AddButton>
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
