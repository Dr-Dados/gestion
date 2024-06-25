import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useDocumentsContext } from "../hooks/useDocumentContext";
import UserDocumentTable from "../document/components/UserDocumentTable";
import Modal from "../ui/Modal";
import AccuseForm from "../document/AccuseForm";

function PersonBL() {
  const { user } = useAuthContext();
  const { documents, dispatch } = useDocumentsContext();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  console.log(selectedId, isOpenModal);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/documents/user/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        if (response.ok) {
          dispatch({ type: "SET_DOCUMENTS", payload: data });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDocuments();
  }, [user.token, dispatch]);
  console.log(documents);

  return (
    <div>
      <h2>Bons de livraison</h2>
      <UserDocumentTable
        documents={documents}
        setSelectedId={setSelectedId}
        setIsOpenModal={setIsOpenModal}
      />
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <h1>
            <AccuseForm
              onClose={() => setIsOpenModal(false)}
              _id={selectedId}
            />
          </h1>
        </Modal>
      )}
    </div>
  );
}

export default PersonBL;
