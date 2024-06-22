import styled from "styled-components";

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
  }
`;
function Logo() {
  return (
    <LogoDiv>
      <img src="#" alt="Logo" />
    </LogoDiv>
  );
}

export default Logo;
