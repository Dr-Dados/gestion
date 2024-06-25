import styled from "styled-components";

import { HiPencil, HiTrash } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const TableColumn = styled.td`
  padding: 1.6rem 2.4rem;
`;

const CustomButton = styled.button`
  background-color: var(--color-green-100);
  color: var(--color-white);
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-green-700);
    color: white;
  }
`;
function DocumentRow({ document, setSelectedId, setIsOpenModal }) {
  const { _id, status, createdAt: date } = document;
  const blDate = new Date(date);
  const formattedDate = blDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleClick = () => {
    setSelectedId(document);
    setIsOpenModal(true);
  };

  return (
    <>
      <tr>
        <TableColumn>{_id}</TableColumn>
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

        <div>
          <CustomButton onClick={handleClick}>
            <p>
              {document.status === "en attente"
                ? "Accuser réception"
                : "Ajouter un commentaire"}
            </p>
          </CustomButton>
        </div>
      </tr>
    </>
  );
}

export default DocumentRow;
