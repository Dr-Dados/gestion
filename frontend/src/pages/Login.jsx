import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import LogoutBtn from "../components/LogoutBtn";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  h1 {
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    color: #080a0b;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    margin: 8px 0;
  }
  input {
    width: 468px;
    height: 48px;
    padding: 0px 8px;
    border: 0;
    box-sizing: border-box;
    border-radius: 24px;
    box-shadow: 2px 2px 4px rgba(3, 3, 3, 0.1);
    background-color: #fcfcfc;
    color: #8a8a8a;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    outline: none;
    margin: 8px 0;
  }
  button {
    padding: 10px;
    border: none;
    border-radius: 24px;
    background-color: #0077cc;
    color: white;
    cursor: pointer;
    outline: none;
    margin: 8px 0;
  }
`;
const Text = styled.p`
  color: #5d5d5b;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  margin: 8px 0;
`;
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <Container>
      <Card>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label id="username">Email :</label>
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label id="password">Mot de passe :</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Se connecter</button>
          <Text>
            Vous n&apos;avez pas un compte ?{" "}
            <Link to="signup"> Créer un compte</Link>
          </Text>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </Card>
    </Container>
  );
}
export default Login;
