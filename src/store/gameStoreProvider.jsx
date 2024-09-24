import { gameContext } from "./gameStore.js";

// eslint-disable-next-line react/prop-types
export const GameContextProvider = ({ children }) => {
  return <gameContext.Provider value={{}}>{children}</gameContext.Provider>;
};
