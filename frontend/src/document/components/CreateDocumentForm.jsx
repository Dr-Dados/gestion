import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { useAuthContext } from "../../hooks/useAuthContext";

const Label = styled.label`
  font-weight: 500;
`;

function CreateDocumentForm() {
  const { user } = useAuthContext();

  const [file, setFile] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log(file);
  const createHandler = async (e) => {
    e.preventDefault();
    const selectedUser = users.find((user) => user.name === selectedUsername);
    const newDoc = {
      path: file.name,
      person: [
        {
          name: selectedUser.name,
          gamme: selectedUser.gamme,
          city: selectedUser.city,
        },
      ],
    };
    console.log(newDoc);
    const reponse = await fetch("http://localhost:3000/api/documents", {
      headers: {
        Authorization: `Bearer ${user.token}`,
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newDoc),
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
    <Form label="Personne" onSubmit={createHandler}>
      <FormRow>
        <Label htmlFor="users">Nom de la personne</Label>
        <input
          list="users"
          value={selectedUsername}
          onChange={(e) => setSelectedUsername(e.target.value)}
        />
        <datalist id="users">
          {users.map((user) => (
            <option key={user._id} value={user.name} />
          ))}
        </datalist>
      </FormRow>

      <FormRow label="Fichier">
        <FileInput
          id="file"
          accept="image/*"
          type="file"
          onChange={(e) => setFile(e.target.files[0])} // Ensure the file object is set correctly
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Annuler
        </Button>
        <Button>Créer</Button>
      </FormRow>
    </Form>
  );
}

export default CreateDocumentForm;
