import styled from "styled-components";
import DocumentRow from "./DocumentRow";

const Table = styled.table`
  width: 100%;
`;
const TableHeader = styled.tr``;

const TableColumn = styled.td`
  padding: 1.6rem 2.4rem;
  font-weight: 500;
`;

function DocumentTable({ documents }) {
  return (
    <Table role="table">
      <TableHeader role="row">
        <TableColumn>Id</TableColumn>

        <TableColumn>Date</TableColumn>
        <TableColumn>Statut</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      {documents.map((document) => (
        <DocumentRow key={document._id} document={document} />
      ))}
    </Table>
  );
}

export default DocumentTable;
