import { useState } from "react";
import styled from "styled-components";
import { useSignup } from "../hooks/useSignup";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
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

function Signup() {
  const [name, setName] = useState(""); // [1
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [fonction, setFonction] = useState("");
  const [gamme, setGamme] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const { error, loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(
      email,
      password,
      name,
      phone,
      role,
      status,
      fonction,
      gamme,
      address,
      city
    );
  };
  return (
    <Container>
      <Card>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label id="password">Nom complet:</label>
          <input
            type="text"
            placeholder="nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label id="username">Email :</label>
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label id="password">mot de passe :</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label id="phone">Phone:</label>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label id="role">Role:</label>
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <label id="statut">Statut:</label>
          <input
            type="text"
            placeholder="Statut"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <label id="fonction">Fonction:</label>
          <input
            type="text"
            placeholder="Fonction"
            value={fonction}
            onChange={(e) => setFonction(e.target.value)}
          />
          <label id="gamme">Gamme:</label>
          <input
            type="text"
            placeholder="Gamme"
            value={gamme}
            onChange={(e) => setGamme(e.target.value)}
          />
          <label id="adresse">Adresse:</label>
          <input
            type="text"
            placeholder="Adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label id="city">City:</label>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button disabled={loading}>Signup</button>
          {error && <p>{error}</p>}
        </form>
      </Card>
    </Container>
  );
}

export default Signup;
