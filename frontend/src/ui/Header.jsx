import styled from "styled-components";
import LogoutBtn from "../components/LogoutBtn";

const HeaderContainer = styled.div`
  grid-area: navbar;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 20px;
  margin :0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  height: 20px;
`;
function Header() {
  return (
    <HeaderContainer>
      <LogoutBtn />
    </HeaderContainer>
  );
}

export default Header;
