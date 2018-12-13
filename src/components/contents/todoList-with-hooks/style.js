import styled from "styled-components";
import { Input, Button, Icon } from "semantic-ui-react";

export const Section = styled.section`
  width: 308px;
  margin: 0 auto;
  text-align: center;
`;
export const Title = styled.h2`
  margin-top: 40px;
`;

export const AddTODOContainer = styled.div`
  margin-top: 80px;
`;

export const AddButton = styled(Button)`
  &&& {
    margin-left: 20px;
  }
`;

export const RemoveButton = styled(Button)`
  &&& {
    margin-left: 20px;
  }
`;

export const SemanticIcon = Icon;

export const TodoInput = Input;

export const TodoList = styled.ul`
  margin-top: 50px;
  text-align: left;
`;

export const TodoItem = styled.div`
  margin-top: 20px;
  ${props => props.completed && "text-decoration-line: line-through;"};
`;

export const TodoContent = styled.span`
  margin: 5px 15px;
`;
