import React, { useState } from "react";
import { AddTODOContainer, TodoInput, AddButton } from "../style";

export default props => {
  const [text, setText] = useState("");
  const onClick = () => {
    props.clickHandler(text);
    setText("");
  };

  return (
    <AddTODOContainer>
      <TodoInput
        value={text}
        onChange={e => setText(e.target.value)}
        type="text"
      />
      <AddButton onClick={onClick}>Add</AddButton>
    </AddTODOContainer>
  );
};
