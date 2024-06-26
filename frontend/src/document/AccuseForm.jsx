import styled from "styled-components";
import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Textarea from "../ui/Textarea";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import toast from "react-hot-toast";
import { useDocumentsContext } from "../hooks/useDocumentContext";

const Label = styled.label`
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
`;

function AccuseForm({ document, onClose }) {
  const { user } = useAuthContext();
  const { documents, dispatch } = useDocumentsContext();
  const [comment, setComment] = useState("");
  const createCommentHandler = async (e) => {
    e.preventDefault();

    const newDoc = {
      _id: document._id,
      comments: comment,
      status: "traité",
    };
    console.log(newDoc);
    // send comment to backend
    const reponse = await fetch(
      `http://localhost:3000/api/documents/${document._id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "content-type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(newDoc),
      }
    );
    const json = await reponse.json();

    if (!reponse.ok) {
      alert("Une erreur s'est produite");
    }
    if (reponse.ok) {
      onClose();
      dispatch({ type: "UPDATE_DOCUMENT", payload: json });
      toast.success("Document créé avec succès");
    }
  };
  return (
    <div>
      <Form>
        <FormRow>
          <Label htmlFor="id">Id</Label>
          <Input type="text" id="id" value={document._id} disabled={true} />
        </FormRow>
        <FormRow>
          <Label htmlFor="comment">Commentaire</Label>
          <Textarea
            type="text"
            id="comment"
            placeholder="mettez votre commentaire sinon laissez vide"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </FormRow>
        <ButtonGroup>
          <Button variation="secondary" type="reset" onClick={onClose}>
            Annuler
          </Button>
          <Button onClick={createCommentHandler}>
            {document.status === "en attente"
              ? "Accuser réception"
              : "Ajouter un commentaire"}
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}

export default AccuseForm;
