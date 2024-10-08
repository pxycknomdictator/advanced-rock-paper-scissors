import { useState } from "react";
import { gameContext } from "./gameStore.js";

// eslint-disable-next-line react/prop-types
export const GameContextProvider = ({ children }) => {
  const [mode, setMode] = useState(true);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("");
  const [display, setDisplay] = useState(false);
  const [hide, setHide] = useState(false);
  const [choices, setChoices] = useState({ user: "", computer: "" });

  const compare = (user, computer) => {
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "rock" && computer === "lizard") ||
      (user === "paper" && computer === "rock") ||
      (user === "paper" && computer === "spock") ||
      (user === "scissors" && computer === "paper") ||
      (user === "scissors" && computer === "lizard") ||
      (user === "lizard" && computer === "spock") ||
      (user === "lizard" && computer === "paper") ||
      (user === "spock" && computer === "scissors") ||
      (user === "spock" && computer === "rock")
    ) {
      setScore((preScore) => preScore + 1);
      setStatus("You win");
    } else if (computer === user) {
      setStatus("Draw Game");
    } else {
      setStatus("House win");
    }
    setChoices((preChoice) => ({
      ...preChoice,
      user: user,
      computer: computer,
    }));
  };

  const computer_Choice = () => {
    const choices = ["rock", "paper", "scissors", "spock", "lizard"];
    let random;
    if (mode) {
      random = Math.floor(Math.random() * 3);
    } else {
      random = Math.floor(Math.random() * choices.length);
    }
    return choices[random];
  };

  const user_Choice = (userChoice) => {
    const computerChoice = computer_Choice();
    compare(userChoice, computerChoice);
    setDisplay(true);
  };

  const handlePlayAgain = () => setDisplay(false);
  const handleHideRule = () => setHide(false);
  const showRules = () => setHide(true);
  const switchMode = () => {
    setMode(!mode);
    setScore(0);
  };

  return (
    <gameContext.Provider
      value={{
        user_Choice,
        score,
        status,
        display,
        handlePlayAgain,
        choices,
        mode,
        handleHideRule,
        hide,
        showRules,
        switchMode,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};
