import { createContext, useReducer } from "react";
import { initialState, rocketsReducer } from "../reducer/rocketsReducer";

export const RocketsContext = createContext();

const RocketsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rocketsReducer, initialState);
  return (
    <RocketsContext.Provider value={{ state, dispatch }}>
      {children}
    </RocketsContext.Provider>
  );
};

export default RocketsContextProvider;
