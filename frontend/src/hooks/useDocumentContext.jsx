import { DocumentContext } from "../context/DocumentContext";
import { useContext } from "react";

export const useDocumentsContext = () => {
  const context = useContext(DocumentContext);

  if (!context) {
    throw Error(
      "DocumentsContext must be used inside an DocumentssContextProvider"
    );
  }

  return context;
};
