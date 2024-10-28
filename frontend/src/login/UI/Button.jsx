import styled from "styled-components";

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: linear-gradient(90deg, #4a90e2, #4ed8b5);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
const Button = ({ text,  }) => {
  return (
    <ContainerDiv>
      <SubmitButton >{text}</SubmitButton>
    </ContainerDiv>
  );
};

export default Button;
