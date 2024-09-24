import { gameContext } from "./gameStore.js";

// eslint-disable-next-line react/prop-types
export const GameContextProvider = ({ children }) => {
  
  const computer_Choice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 2);
    return choices[random];
  };

  const user_Choice = (userChoice) => {
    const computerChoice = computer_Choice();
    console.log("User Choice", userChoice);
    console.log("Computer Choice", computerChoice);
  };

  return (
    <gameContext.Provider value={{ user_Choice }}>
      {children}
    </gameContext.Provider>
  );
};
