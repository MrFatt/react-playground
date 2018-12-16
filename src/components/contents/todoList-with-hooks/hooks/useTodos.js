import { useState } from "react";

export default initialTodos => {
  const [todos, setTodos] = useState([]);

  const addTodo = text =>
    setTodos(todos => [...todos, { text: text, completed: false }]);

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

  return [todos, addTodo, removeTodo, completeTodo];
};
