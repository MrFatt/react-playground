import React, { useState } from "react";
import {
  Section,
  Title,
  AddTODOContainer,
  Button,
  RemoveButton,
  TodoList,
  TodoItem
} from "./style";

export default () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
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

  return (
    <Section>
      <Title>TODO List</Title>
      <AddTODOContainer>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
        />
        <Button onClick={addTodo}>Add</Button>
      </AddTODOContainer>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={`${index}-${todo.text}`} completed={todo.completed}>
            <span onClick={completeTodo(index)}>{todo.text}</span>
            <RemoveButton onClick={removeTodo(index)}>Remove</RemoveButton>
          </TodoItem>
        ))}
      </TodoList>
    </Section>
  );
};
