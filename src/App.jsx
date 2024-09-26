import { Game } from "./components/Game";
import { Scoreboard } from "./components/Scoreboard";
import { AdvancedScoreboard } from "./components/AdvancedScoreboard";
import { Rules } from "./components/Rules";
import { RuleBtn } from "./components/RuleBtn";
import { useContext } from "react";
import { gameContext } from "./store/gameStore";

export const App = () => {
  const { mode, hide } = useContext(gameContext);
  return (
    <main className="w-full transition-all pb-3 min-h-screen relative bg-gradient-to-l to-radialBackground from-radialBackground-light overflow-y-hidden pt-7">
      {mode ? <Scoreboard /> : <AdvancedScoreboard />}
      <Game />
      <div className="absolute w-full bottom-[1rem] px-5">
        <div className="w-full flex justify-center gap-5 md:justify-end">
          <RuleBtn />
        </div>
      </div>
      {hide && (
        <div className="absolute top-0 w-full h-screen">
          <div className="w-full h-screen custom_bg flex items-center justify-center">
            <Rules />
          </div>
        </div>
      )}
    </main>
  );
};
