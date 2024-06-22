import { PersonsContext } from "../context/PersonsContext";
import { useContext } from "react";

export const usePersonsContext = () => {
  const context = useContext(PersonsContext);

  if (!context) {
    throw Error("PersonsContext must be used inside an PersonsContextProvider");
  }
  return context;
};
