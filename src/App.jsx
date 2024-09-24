import { RockPaperScissors } from "./components/RockPaperScissors";
import { Scoreboard } from "./components/Scoreboard";

export const App = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-l to-radialBackground from-radialBackground-light pt-7">
      <Scoreboard />
      <section>
        <RockPaperScissors />
      </section>
    </main>
  );
};
