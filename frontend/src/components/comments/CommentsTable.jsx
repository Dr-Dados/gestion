import styled from "styled-components";
import CommentsRow from "./CommentsRow";

const Table = styled.table`
  width: 100%;
`;
const TableHeader = styled.tr``;

const TableColumn = styled.td`
  padding: 1.6rem 2.4rem;
  font-weight: 500;
`;
function CommentsTable({ documents }) {
  return (
    <div>
      <Table role="table">
        <TableHeader role="row">
          <TableColumn>Identifiant BL</TableColumn>
          <TableColumn>Commentaire</TableColumn>
          <TableColumn>Personne</TableColumn>
          <TableColumn>Fonction</TableColumn>
          <TableColumn>Gamme</TableColumn>
          <TableColumn>Ville</TableColumn>
          <TableColumn>Date</TableColumn>
        </TableHeader>
        {documents.map((document) => {
          const documentId = document._id;
          return document.comments.map((comment) => (
            <CommentsRow
              key={comment._id}
              documentId={documentId}
              comment={comment}
              person={document.person[0]}
            />
          ));
        })}
      </Table>
    </div>
  );
}

export default CommentsTable;
