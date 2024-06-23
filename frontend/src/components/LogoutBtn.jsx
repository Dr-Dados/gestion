import { useLogout } from "../hooks/useLogout";

function LogoutBtn() {
  const { logout } = useLogout();
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return <bouton onClick={handleLogout}>Se déconnecter</bouton>;
}

export default LogoutBtn;
