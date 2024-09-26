import { useContext } from "react";
import { gameContext } from "../store/gameStore";

export const RuleBtn = () => {
  const { showRules, switchMode, mode } = useContext(gameContext);
  return (
    <>
      <button
        className="uppercase rounded-md font-fira_code text-white border-[2.25px] border-headerOutline py-2 px-8"
        onClick={switchMode}
      >
        {mode ? "Advance" : "Normal"}
      </button>
      <button
        onClick={showRules}
        className="uppercase rounded-md font-fira_code text-white border-[2.25px] border-headerOutline py-2 px-8"
      >
        rules
      </button>
    </>
  );
};
