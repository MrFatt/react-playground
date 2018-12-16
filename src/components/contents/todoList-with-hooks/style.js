import styled from "styled-components";
import { Input, Button, Icon } from "semantic-ui-react";

export const Section = styled.section`
  width: 508px;
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

export const ShowAllButton = styled(Button)`
  &&& {
    margin-left: 20px;
  }
`;

export const ShowCompletedButton = styled(Button)`
  &&& {
    margin-left: 20px;
  }
`;

export const ShowUncompletedButton = styled(Button)`
  &&& {
    margin-left: 20px;
  }
`;

export const CheckedIcon = styled(Icon)``;

export const DeleteIcon = styled(Icon)`
  position: relative;
  left: 360px;
`;

export const TodoInput = styled(Input)`
  width: 380px;
`;

export const TodoList = styled.ul`
  margin-top: 50px;
  text-align: left;
`;

export const TodoItem = styled.div`
  margin: 30px 20px;
`;

export const TodoContent = styled.span`
  margin: 5px 15px;
  ${props => props.completed && "text-decoration-line: line-through;"};
`;

export const ToggleButtonContainer = styled.div`
  text-align: center;
`;
