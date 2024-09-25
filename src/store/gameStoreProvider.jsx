import { useState } from "react";
import { gameContext } from "./gameStore.js";

// eslint-disable-next-line react/prop-types
export const GameContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const compare = (user, computer) => {
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setScore((preScore) => preScore + 1);
      console.log("You win");
    } else if (computer === user) {
      console.log("Draw Game");
    } else {
      console.log("Computer Win");
    }
  };

  const computer_Choice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 2);
    return choices[random];
  };

  const user_Choice = (userChoice) => {
    const computerChoice = computer_Choice();
    compare(userChoice, computerChoice);
  };

  return (
    <gameContext.Provider value={{ user_Choice, score }}>
      {children}
    </gameContext.Provider>
  );
};
