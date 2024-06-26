import { createContext, useReducer } from "react";

export const DocumentContext = createContext();

const initialState = {
  documents: [],
};

export const documentReducer = (state, action) => {
  switch (action.type) {
    case "SET_DOCUMENTS":
      return {
        ...state,
        documents: action.payload,
      };
    case "ADD_DOCUMENT":
      return {
        ...state,
        documents: [...state.documents, action.payload],
      };

    case "UPDATE_DOCUMENT":
      return {
        ...state,
        documents: state.documents.map((document) =>
          document._id === action.payload._id ? action.payload : document
        ),
      };
    case "DELETE_DOCUMENT":
      return {
        ...state,
        documents: state.documents.filter(
          (document) => document._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export const DocumentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(documentReducer, initialState);
  return (
    <DocumentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DocumentContext.Provider>
  );
};
