import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-weight: 500;
`;
function CreateDocumentForm() {
  useEffect(() => {
    // fetch users
    fetch("http://localhost:3000/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  });

  const [file, setFile] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState(null);
  const createHandler = (e) => {
    e.preventDefault();
    console.log(file, selectedUsername);
  };
  return (
    <Form label="Personne">
      <FormRow>
        <Label htmlFor="image">Nom de la personne</Label>
        <input
          list="users"
          value={selectedUsername}
          onChange={(e) => {
            setSelectedUsername(e.target.value);
          }}
        />
        <datalist id="users">
          {users.map((user) => (
            <option key={user._id} value={user.name} />
          ))}
        </datalist>
      </FormRow>

      <FormRow label="Fichier">
        <FileInput
          id="File"
          accept="image/*"
          type="file"
          value={file}
          onChange={(e) => setFile(e.target.value)}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Annuler
        </Button>
        <Button onClick={createHandler}>Créer</Button>
      </FormRow>
    </Form>
  );
}

export default CreateDocumentForm;
