import React, { useState, useRef } from "react";
import styled from "styled-components";

export default () => {
  const Section = styled.section`
    width: 768px;
    margin: 0 auto;
    text-align: center;
  `;
  const Title = styled.h2`
    margin-top: 40px;
  `;

  const AddTODOContainer = styled.div`
    margin-top: 80px;
  `;

  const Button = styled.button`
    margin-left: 20px;
    width: 40px;
  `;
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");
  const addTodo = () => {
    setTodos(todos => [
      ...todos,
      { text: inputRef.current.value, completed: false }
    ]);
  };
  return (
    <Section>
      <Title>TODO List</Title>
      <AddTODOContainer>
        <input ref={inputRef} type="text" />
        <Button onClick={addTodo}>Add</Button>
      </AddTODOContainer>
    </Section>
  );
};
