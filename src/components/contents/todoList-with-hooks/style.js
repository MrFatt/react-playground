import styled from "styled-components";

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

export const Button = styled.button`
  margin-left: 20px;
  width: 40px;
`;

export const RemoveButton = styled.button`
  margin-left: 20px;
  width: 70px;
`;

export const CompleteButton = styled.button`
  margin-left: 20px;
  width: 70px;
`;

export const TodoList = styled.ul`
  margin-top: 50px;
`;

export const TodoItem = styled.div`
  margin-top: 20px;
  ${props => props.completed && "text-decoration-line: line-through;"};
`;
