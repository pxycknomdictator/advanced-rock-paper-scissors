import scissors from "/images/icon-scissors.svg";
import rock from "/images/icon-rock.svg";
import paper from "/images/icon-paper.svg";
import { Move } from "./Move";
import { Result } from "./Result";
import { useContext } from "react";
import { gameContext } from "../store/gameStore";

export const MatchCompare = () => {
  const { choices, status } = useContext(gameContext);

  const moves = { rock, paper, scissors };
  const colors = {
    rock: "border-rock",
    paper: "border-paper",
    scissors: "border-scissors",
  };

  return (
    <section className="relative flex justify-between items-center text-center text-white font-semibold mx-auto gap-5 md:gap-16">
      <div className="flex items-center justify-center flex-col-reverse md:flex-col gap-11">
        <span className="uppercase font-fira_code text-xl">you picked</span>
        <div
          className={`bg-white ${
            status.includes("You") ? "custom_glow" : null
          } flex size-[150px] md:size-[240px] items-center justify-center rounded-full p-7 md:p-10 custom_shadow border-[18px] md:border-[20px] ${
            colors[`${choices.user}`]
          }`}
        >
          <Move move={moves[`${choices.user}`]} />
        </div>
      </div>

      <div className="absolute mx-auto bottom-[-9rem] md:static">
        <Result />
      </div>

      <div className="flex items-center justify-center flex-col-reverse md:flex-col gap-11">
        <span className="uppercase font-fira_code text-xl">house picked</span>
        <div
          className={`bg-white flex ${
            status.includes("Computer") ? "custom_glow" : null
          } size-[150px] md:size-[240px] items-center justify-center rounded-full p-7 md:p-10 custom_shadow border-[18px] md:border-[20px] ${
            colors[`${choices.computer}`]
          }`}
        >
          <Move move={moves[`${choices.computer}`]} />
        </div>
      </div>
    </section>
  );
};
