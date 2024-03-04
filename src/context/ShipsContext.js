import { createContext, useReducer } from "react";
import { shipsReducer, initialState } from "../reducer/shipsReducer";

export const ShipsContext = createContext();

const ShipsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shipsReducer, initialState);

  return (
    <ShipsContext.Provider value={{ state, dispatch }}>
      {children}
    </ShipsContext.Provider>
  );
};

export default ShipsContextProvider;
