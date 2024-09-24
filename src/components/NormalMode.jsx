import { Move } from "./Move";
import rock from "/images/icon-rock.svg";
import paper from "/images/icon-paper.svg";
import scissors from "/images/icon-scissors.svg";
import triangle from "/images/bg-triangle.svg";

export const NormalMode = () => {
  return (
    <>
      <img
        className="w-[65%] md:w-[75%] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        src={triangle}
        alt="triangle"
      />
      <div className="size-full relative">
        <div className="bg-white flex size-[160px] md:size-[190px] items-center justify-center rounded-full p-7 md:p-10 custom_shadow border-[14px] md:border-[18px] border-paper absolute top-0 left-0 cursor-pointer">
          <Move move={paper} />
        </div>
        <div className="bg-white flex size-[160px] md:size-[190px] items-center justify-center rounded-full p-7 md:p-10 custom_shadow border-[14px] md:border-[18px] border-scissors absolute top-0 right-0 cursor-pointer">
          <Move move={scissors} />
        </div>
        <div className="bg-white flex size-[160px] md:size-[190px] items-center justify-center rounded-full p-7 md:p-10 custom_shadow border-[14px] md:border-[18px] border-rock absolute bottom-[2rem] left-[7rem] md:bottom-[3rem] md:left-[8.6rem] cursor-pointer">
          <Move move={rock} />
        </div>
      </div>
    </>
  );
};
