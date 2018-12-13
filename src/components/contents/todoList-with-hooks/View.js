import React, { useState } from "react";
import { Section, Title, AddTODOContainer, Button } from "./style";

export default () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const addTodo = () => {
    setTodos(todos => [...todos, { text: text, completed: false }]);
    setText("");
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
      <ul>
        {todos.map((todo, index) => (
          <li key={`${index}-${todo.text}`}>{todo.text}</li>
        ))}
      </ul>
    </Section>
  );
};
