import styled from "styled-components";
import Logo from "./Logo";
import MenuItem from "./MainNav";
import MainNav from "./MainNav";
import { useAuthContext } from "../hooks/useAuthContext";
import PersonSideBar from "./PersonSidebar";

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
  const { user } = useAuthContext();

  return (
    <SidebarContainer>
      <Logo />
      <nav>
        {user && user.role === "admin" ? <MainNav /> : <PersonSideBar />}
      </nav>
    </SidebarContainer>
  );
}

export default Sidebar;
