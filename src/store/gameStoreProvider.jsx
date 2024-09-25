import { useState } from "react";
import { gameContext } from "./gameStore.js";

// eslint-disable-next-line react/prop-types
export const GameContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");
  const [display, setDisplay] = useState(false);
  const [choices, setChoices] = useState({
    user: "paper",
    computer: "rock",
  });

  const compare = (user, computer) => {
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setScore((preScore) => preScore + 1);
      setStatus("You win");
    } else if (computer === user) {
      setStatus("Draw Game");
    } else {
      setStatus("Computer win");
    }
    setChoices((preChoice) => ({
      ...preChoice,
      user: user,
      computer: computer,
    }));
  };

  const computer_Choice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 2);
    return choices[random];
  };

  const user_Choice = (userChoice) => {
    const computerChoice = computer_Choice();
    compare(userChoice, computerChoice);
    setDisplay(true);
  };

  const handlePlayAgain = () => setDisplay(false);

  return (
    <gameContext.Provider
      value={{ user_Choice, score, status, display, handlePlayAgain, choices }}
    >
      {children}
    </gameContext.Provider>
  );
};
