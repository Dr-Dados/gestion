import styled from "styled-components";
import { useLogout } from "../hooks/useLogout";

const Button = styled.button`
  background-color: var(--color-brand-600);
  color: var(--color-grey-50);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 20px 10px;
  &:hover {
    background-color: var(--color-brand-800);
  }
`;
function LogoutBtn() {
  const { logout } = useLogout();
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return <Button onClick={handleLogout}>Se déconnecter</Button>;
}

export default LogoutBtn;
