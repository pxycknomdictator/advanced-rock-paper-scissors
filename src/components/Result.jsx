import { useContext } from "react";
import { gameContext } from "../store/gameStore";

export const Result = () => {
  const { status, handlePlayAgain } = useContext(gameContext);
  return (
    <div className="space-y-3">
      <span className="text-4xl md:text-3xl block uppercase font-bold text-white">
        {status}
      </span>
      <button
        onClick={handlePlayAgain}
        className="uppercase bg-white text-red-500 rounded-md py-2 px-7 md:w-full md:px-0"
      >
        play again
      </button>
    </div>
  );
};
