import { useContext } from "react";
import { MatchCompare } from "./MatchCompare";
import { NormalMode } from "./NormalMode";
import { AdvancedMode } from "./AdvancedMode";
import { gameContext } from "../store/gameStore";

export const Game = () => {
  const { display, mode } = useContext(gameContext);

  return (
    <>
      {!display ? (
        <section className="relative size-[380px] md:size-[470px] mt-10 md:mt-7 mx-auto">
          {mode ? <NormalMode /> : <AdvancedMode />}
        </section>
      ) : (
        <section className="transition-all relative custom_screen:w-[80%] md:w-[750px] mx-auto mt-16 md:mt-10">
          <MatchCompare />
        </section>
      )}
    </>
  );
};
