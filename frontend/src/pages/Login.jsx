import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import FormWrapper from "../login/UI/FormWrapper";
import Logo from "../login/UI/Logo";
import InputField from "../login/UI/InputField";
import Button from "../login/UI/Button";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Veuillez saisir vos identifiants");
    }

    await login(email, password);
    if (error) {
      toast.error("Identifiants incorrects");
    }
  };

  console.log("error", error);
  return (
    <FormWrapper>
      <Logo />
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Identifiant"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Se connecter" />
      </form>
    </FormWrapper>
  );
}
export default Login;
