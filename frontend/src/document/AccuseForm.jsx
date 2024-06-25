import styled from "styled-components";
import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Textarea from "../ui/Textarea";

const Label = styled.label`
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
`;

function AccuseForm({ _id, onClose }) {
  console.log(_id);
  const createCommentHandler = () => {};
  return (
    <div>
      <Form>
        <FormRow>
          <Label htmlFor="id">Id</Label>
          <Input type="text" id="id" value={_id} disabled={true} />
        </FormRow>
        <FormRow>
          <Label htmlFor="comment">Commentaire</Label>
          <Textarea
            type="text"
            id="comment"
            placeholder="mettez votre commentaire sinon laissez vide"
          />
        </FormRow>
        <ButtonGroup>
          <Button variation="secondary" type="reset" onClick={onClose}>
            Annuler
          </Button>
          <Button onClick={createCommentHandler}>Accuser réception</Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}

export default AccuseForm;
