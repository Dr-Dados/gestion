import { useLogout } from "../hooks/useLogout";

function LogoutBtn() {
  const { logout } = useLogout();
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return <boutton onClick={handleLogout}>Se déconnecter</boutton>;
}

export default LogoutBtn;
