import { useContext } from "react";
import { gameContext } from "../store/gameStore";

export const Result = () => {
  const { status, handlePlayAgain } = useContext(gameContext);
  return (
    <div className="space-y-5 md:space-y-3">
      <span className="text-5xl md:text-4xl block uppercase font-bold text-white">
        {status}
      </span>
      <button
        onClick={handlePlayAgain}
        className="uppercase bg-white text-red-500 rounded-md px-16 py-2.5 sm:w-auto md:px-8"
      >
        play again
      </button>
    </div>
  );
};
