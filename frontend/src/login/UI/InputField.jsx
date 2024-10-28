import styled from "styled-components";

const InputFieldDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;
const Icon = styled.div`
  padding: 10px;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;

  &:focus {
    border-bottom: 1px solid #9b59b6;
    outline: none;
  }
`;
const InputField = ({ type, placeholder, ...props }) => {
  return (
    <InputFieldDiv>
      <Input type={type} placeholder={placeholder} {...props} />
    </InputFieldDiv>
  );
};

export default InputField;
