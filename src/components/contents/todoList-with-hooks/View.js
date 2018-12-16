import React, { useState } from "react";
import { Section, Title } from "./style";
import TodoInput from "./components/TodoInput";
import useTodo from "./hooks/useTodos";
import TodoList from "./components/TodoList";

export default () => {
  const [todos, addTodo, removeTodo, completeTodo] = useTodo([]);

  return (
    <Section>
      <Title>TODO List</Title>
      <TodoInput clickHandler={addTodo} />
      <TodoList
        todos={todos}
        onItemClick={completeTodo}
        onItemRemove={removeTodo}
      />
    </Section>
  );
};
