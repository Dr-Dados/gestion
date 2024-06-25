import styled from "styled-components";

import { HiPencil, HiTrash } from "react-icons/hi2";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocumentsContext } from "../../hooks/useDocumentContext";
import { toast } from "react-hot-toast";
import { useState } from "react";
import FileDownloadButton from "../../components/FileButtonDownload";
const TableColumn = styled.td`
  padding: 1.6rem 2.4rem;
`;

const ActionButtons = styled.div`
  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--color-brand-600);
    }
  }
`;

const Button = styled.button`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-brand-300);
  }
`;
function DocumentRow({ document }) {
  const { user } = useAuthContext();
  const { dispatch } = useDocumentsContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // display data
  const { _id, status, person, createdAt: date } = document;
  const blDate = new Date(date);
  const formattedDate = blDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const { name, fonction, gamme, city } = person[0];

  const deleteHandler = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/documents/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "content-type": "application/json",
          },
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Document deleted");
        dispatch({ type: "DELETE_DOCUMENT", payload: _id });
        toast.success("Document supprimé avec succès");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <tr>
        <TableColumn>{_id}</TableColumn>
        <TableColumn>{name}</TableColumn>
        <TableColumn>{fonction}</TableColumn>
        <TableColumn>{gamme}</TableColumn>
        <TableColumn>{city}</TableColumn>
        <TableColumn>{formattedDate}</TableColumn>
        <TableColumn>
          <div className="w-max">
            <div
              className={`relative grid items-center px-2 py-1 font-sans text-sm font-bold ${
                status === "en attente"
                  ? "text-red-900 bg-red-500/20"
                  : "text-green-900 bg-green-500/20"
              } uppercase rounded-md select-none whitespace-nowrap `}
            >
              <span className="">{status}</span>
            </div>
          </div>
        </TableColumn>

        <ActionButtons>
          <Button>
            <FileDownloadButton filename={document.name} />
          </Button>
          <Button onClick={deleteHandler}>
            <HiTrash />
          </Button>
        </ActionButtons>
      </tr>
    </>
  );
}

export default DocumentRow;
