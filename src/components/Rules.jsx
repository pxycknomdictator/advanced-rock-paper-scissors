import rules from "/images/image-rules.svg";
import bonus_rules from "/images/image-rules-bonus.svg";
import close from "/images/icon-close.svg";
import { useContext } from "react";
import { gameContext } from "../store/gameStore";

export const Rules = () => {
  const { mode, handleHideRule } = useContext(gameContext);
  return (
    <div className="flex bg-white px-10 w-full h-full md:h-auto md:w-96 py-8 rounded-lg items-center justify-center">
      <div>
        <div className="flex justify-between items-center mb-14 md:mb-6">
          <span className="text-3xl text-darkText font-bold">Rules</span>
          <img
            onClick={handleHideRule}
            className="cursor-pointer"
            src={close}
            alt="close"
          />
        </div>
        <img src={mode ? rules : bonus_rules} alt="rules" />
      </div>
    </div>
  );
};
