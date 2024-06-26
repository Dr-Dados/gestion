import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocumentsContext } from "../../hooks/useDocumentContext";
import toast from "react-hot-toast";

const Label = styled.label`
  font-weight: 500;
`;

function CreateDocumentForm({ onClose }) {
  const { user } = useAuthContext();
  const { dispatch } = useDocumentsContext();

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
  const createHandler = async (e) => {
    e.preventDefault();
    const selectedUser = users.find((user) => user.name === selectedUsername);
    const newFile = {
      path: file.name,
      type: file.type,
      size: file.size,
      lastModifiedDate: file.lastModifiedDate,
      lastModified: file.lastModified,
      webkitRelativePath: file.webkitRelativePath,
    };
    const newDoc = {
      newFile,
      user_id: selectedUser._id,
      person: [
        {
          name: selectedUser.name,
          gamme: selectedUser.gamme,
          city: selectedUser.city,
          fonction: selectedUser.fonction,
          email: selectedUser.email,
        },
      ],
    };
    const formData = new FormData();
    formData.append("file", file);
    formData.append("newDoc", JSON.stringify(newDoc));
    console.log(formData);

    const reponse = await fetch("http://localhost:3000/api/documents", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "POST",
      body: formData,
    });
    const json = await reponse.json();

    if (!reponse.ok) {
      alert("Une erreur s'est produite");
    }
    if (reponse.ok) {
      onClose();
      dispatch({ type: "ADD_DOCUMENT", payload: json });
      toast.success("Document créé avec succès");
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
          name="fileUpload"
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
