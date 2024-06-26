import styled from "styled-components";
import UserDocumentRow from "./UserDocumentRow";

const Table = styled.table`
  width: 100%;
`;
const TableHeader = styled.tr``;

const TableColumn = styled.td`
  padding: 1.6rem 2.4rem;
  font-weight: 500;
`;

function DocumentTable({ documents, setSelectedId, setIsOpenModal }) {
  return (
    <Table role="table">
      <TableHeader role="row">
        <TableColumn>Id</TableColumn>

        <TableColumn>Date</TableColumn>
        <TableColumn>Statut</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      {documents.map((document) => (
        <UserDocumentRow
          key={document._id}
          document={document}
          setSelectedId={setSelectedId}
          setIsOpenModal={setIsOpenModal}
        />
      ))}
    </Table>
  );
}

export default DocumentTable;
