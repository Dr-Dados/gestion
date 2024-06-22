import { createContext, useReducer } from "react";

export const PersonsContext = createContext();

const initialState = {
  persons: [],
};

export const personReducer = (state, action) => {
  switch (action.type) {
    case "SET_PERSONS":
      return {
        ...state,
        persons: action.payload,
      };
    case "ADD_PERSON":
      return {
        ...state,
        persons: [...state.persons, action.payload],
      };
    case "DELETE_PERSON":
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== action.payload),
      };
    case "UPDATE_PERSON":
      return {
        ...state,
        persons: state.persons.map((person) =>
          person.id === action.payload.id ? action.payload : person
        ),
      };
    default:
      return state;
  }
};
export const PersonsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(personReducer, initialState);
  return (
    <PersonsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PersonsContext.Provider>
  );
};
