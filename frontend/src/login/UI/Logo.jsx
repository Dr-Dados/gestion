import LogoImg from "/logo.png";
import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  img {
    width: 100%;
    max-width: 100px;
  }
`;

const Logo = () => {
  return (
    <ImgContainer>
      <img src={LogoImg} alt="logo mediprogroupe" />
    </ImgContainer>
  );
};

export default Logo;
