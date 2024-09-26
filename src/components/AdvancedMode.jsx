import { Move } from "./Move";
import pentagon from "/images/bg-pentagon.svg";
import rock from "/images/icon-rock.svg";
import paper from "/images/icon-paper.svg";
import scissors from "/images/icon-scissors.svg";
import lizard from "/images/icon-lizard.svg";
import spock from "/images/icon-spock.svg";

import { useContext } from "react";
import { gameContext } from "../store/gameStore";

export const AdvancedMode = () => {
  const { user_Choice } = useContext(gameContext);

  return (
    <>
      <img
        className="w-[70%] md:w-[75%] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        src={pentagon}
        alt="pentagon"
      />
      <div className="size-full relative">
        <div
          onClick={() => user_Choice("paper")}
          className="bg-white flex size-[130px] md:size-[150px] items-center justify-center rounded-full p-7 md:p-8 custom_shadow border-[10px] md:border-[15px] border-paper absolute right-[-1rem] top-[7rem] cursor-pointer"
        >
          <Move move={paper} />
        </div>
        <div
          onClick={() => user_Choice("scissors")}
          className="bg-white flex size-[130px] md:size-[150px] items-center justify-center rounded-full p-7 md:p-8 custom_shadow border-[10px] md:border-[15px] border-scissors absolute top-[-0.4rem] left-[7.5rem] md:left-[9.4rem] cursor-pointer"
        >
          <Move move={scissors} />
        </div>
        <div
          onClick={() => user_Choice("rock")}
          className="bg-white flex size-[130px] md:size-[150px] items-center justify-center rounded-full p-7 md:p-8 custom_shadow border-[10px] md:border-[15px] border-rock absolute bottom-[-1rem] md:bottom-[1rem] right-[2.6rem] cursor-pointer"
        >
          <Move move={rock} />
        </div>
        <div
          onClick={() => user_Choice("spock")}
          className="bg-white flex size-[130px] md:size-[150px] items-center justify-center rounded-full p-7 md:p-8 custom_shadow border-[10px] md:border-[15px] border-cyan absolute left-[-1rem] top-[7rem] cursor-pointer"
        >
          <Move move={spock} />
        </div>
        <div
          onClick={() => user_Choice("lizard")}
          className="bg-white flex size-[130px] md:size-[150px] items-center justify-center rounded-full p-7 md:p-8 custom_shadow border-[10px] md:border-[15px] border-lizard absolute bottom-[-1rem] md:bottom-[1rem] left-[2.6rem] cursor-pointer"
        >
          <Move move={lizard} />
        </div>
      </div>
    </>
  );
};
