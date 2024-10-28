import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setLoading(false);
      setError(json.message);
      return;
    }
    if (response.ok) {
      setError(null);
      localStorage.setItem("token", json.token);
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
      toast.success("Vous êtes connecté");
    }
  };
  return { error, loading, login };
};
