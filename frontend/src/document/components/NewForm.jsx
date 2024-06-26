import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

function NewForm() {
  const { user } = useAuthContext();

  const [userName, setUserName] = useState("");

  const selectedUser = { userName, test: "test" };
  const submitHandler = async (e) => {
    e.preventDefault();
    const reponse = await fetch("http://localhost:3000/api/documents", {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(selectedUser),
    });
    const json = await reponse.json();
    console.log(json);

    if (!reponse.ok) {
      alert("Une erreur s'est produite");
    }
    if (reponse.ok) {
      alert("Document créé avec succès");
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default NewForm;
