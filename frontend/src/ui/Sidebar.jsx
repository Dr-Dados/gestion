import styled from "styled-components";
import Logo from "./Logo";
import MenuItem from "./MainNav";
import MainNav from "./MainNav";

const SidebarContainer = styled.div`
  grid-area: sidebar;
  background-color: #f8f9fa;
  border-right: 1px solid #e9ecef;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 100px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Logo />
      <nav>
        <MainNav />
      </nav>
    </SidebarContainer>
  );
}

export default Sidebar;
