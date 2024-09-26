import { Game } from "./components/Game";
// import { Scoreboard } from "./components/Scoreboard";
import { AdvancedScoreboard } from "./components/AdvancedScoreboard";
import { RuleBtn } from "./components/RuleBtn";

export const App = () => {
  return (
    <main className="w-full relative min-h-screen bg-gradient-to-l to-radialBackground from-radialBackground-light pt-7">
      {/* <Scoreboard /> */}
      <AdvancedScoreboard />
      <Game />
      <div className="text-center md:text-right px-6 mt-10 md:mt-0 absolute bottom-5 right-0">
        <RuleBtn />
      </div>
    </main>
  );
};
