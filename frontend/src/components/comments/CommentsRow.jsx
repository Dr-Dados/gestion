import styled from "styled-components";

const TableColumn = styled.td`
  padding: 1.6rem 2.4rem;
`;

function CommentsRow({ comment, person, documentId }) {
  console.log(comment, person);
  const { _id, comment: com, createdAt } = comment;
  const { name, fonction, gamme, city } = person;

  const blDate = new Date(createdAt);
  const formattedDate = blDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <tr>
        <TableColumn>{documentId}</TableColumn>
        <TableColumn>{com}</TableColumn>
        <TableColumn>{name}</TableColumn>
        <TableColumn>{fonction}</TableColumn>
        <TableColumn>{gamme}</TableColumn>
        <TableColumn>{city}</TableColumn>
        <TableColumn>{formattedDate}</TableColumn>
      </tr>
    </>
  );
}

export default CommentsRow;
