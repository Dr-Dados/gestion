import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  color: #333;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  margin: 0;
  padding: 0;
  grid-template-areas: "sidebar navbar" "sidebar content" "sidebar footer";
`;

const MainContainer = styled.div`
  grid-area: content;
  padding: 20px;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </StyledAppLayout>
  );
}

export default AppLayout;
