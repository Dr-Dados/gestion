import styled from "styled-components";

import { HiPencil, HiTrash } from "react-icons/hi2";
import { useEffect, useState } from "react";

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
  const { _id, status, person } = document;
  const { name, fonction, gamme, city, date } = person[0];

  return (
    <>
      <tr>
        <TableColumn>{_id}</TableColumn>
        <TableColumn>{name}</TableColumn>
        <TableColumn>{fonction}</TableColumn>
        <TableColumn>{gamme}</TableColumn>
        <TableColumn>{city}</TableColumn>
        <TableColumn>{date}</TableColumn>
        <TableColumn>
          {status === "Signed" ? "signé" : "en attente"}
        </TableColumn>

        <ActionButtons>
          <Button>
            <HiPencil />
          </Button>
          <Button>
            <HiTrash />
          </Button>
        </ActionButtons>
      </tr>
    </>
  );
}

export default DocumentRow;
