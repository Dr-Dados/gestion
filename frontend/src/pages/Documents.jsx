import styled from "styled-components";
import DocumentTable from "../document/components/DocumentTable";
import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import CreateDocumentForm from "../document/components/CreateDocumentForm";
import Input from "../ui/Input";
import { useDocumentsContext } from "../hooks/useDocumentContext";
import { useAuthContext } from "../hooks/useAuthContext";

const DocumentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`;

const Button = styled.button`
  background-color: var(--color-brand-600);
  color: var(--color-grey-50);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--color-brand-800);
  }
`;

function Documents() {
  const { documents, dispatch } = useDocumentsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/documents", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await res.json();
        console.log("data", data);
        if (res.ok) {
          dispatch({ type: "SET_DOCUMENTS", payload: data });
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (user) {
      fetchDocuments();
    }
    console.log(documents);
  }, [dispatch, user]);
  const [data, setData] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    if (data) {
      setData(documents);
      if (filter) {
        setData(
          documents.filter((document) =>
            document.name.toLowerCase().includes(filter.toLowerCase())
          )
        );
      }
    }
  }, [filter, documents]);
  return (
    <div>
      <DocumentHeader>
        <h1>Bons De livraison</h1>
        <Button onClick={() => setIsOpenModal((o) => !o)}>
          Créer un bon de livraison
        </Button>
      </DocumentHeader>
      <DocumentHeader>
        <Input
          placeholder="nom"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </DocumentHeader>
      <DocumentTable documents={data} />
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <h1>
            <CreateDocumentForm />
          </h1>
        </Modal>
      )}
    </div>
  );
}

export default Documents;
