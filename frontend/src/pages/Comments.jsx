import CommentsTable from "../components/comments/CommentsTable";
import { useDocumentsContext } from "../hooks/useDocumentContext";

function Comments() {
  const { documents, dispatch } = useDocumentsContext();
  return (
    <div>
      <h1>Comments</h1>
      <CommentsTable documents={documents} />
    </div>
  );
}

export default Comments;
