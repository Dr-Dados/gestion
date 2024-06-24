import { useEffect, useState } from "react";
import { useDocumentsContext } from "../hooks/useDocumentContext";
import { useAuthContext } from "../hooks/useAuthContext";

function PersonBL() {
  const { documents, dispatch } = useDocumentsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/documents/user/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await res.json();
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
  //   const [data, setData] = useState([]);
  //   const [isOpenModal, setIsOpenModal] = useState(false);

  return <div>test</div>;
}

export default PersonBL;
