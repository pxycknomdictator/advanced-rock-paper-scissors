import scissors from "/images/icon-scissors.svg";
import { Move } from "./Move";
import { Result } from "./Result";

export const MatchCompare = () => {
  return (
    <section className="relative flex justify-between items-center text-center text-white font-semibold mx-auto gap-5 md:gap-16">
      <div className="flex items-center justify-center flex-col-reverse md:flex-col gap-11">
        <span className="uppercase font-fira_code text-xl">you picked</span>
        <div
          className={`custom_glow bg-white flex size-[150px] md:size-[240px] items-center justify-center rounded-full p-7 md:p-10 custom_shadow border-[18px] md:border-[20px] border-scissors`}
        >
          <Move move={scissors} />
        </div>
      </div>
      <div className="absolute mx-auto bottom-[-9rem] md:static">
        <Result />
      </div>

      <div className="flex items-center justify-center flex-col-reverse md:flex-col gap-11">
        <span className="uppercase font-fira_code text-xl">house picked</span>
        <div
          className={`bg-white flex size-[150px] md:size-[240px] items-center justify-center rounded-full p-7 md:p-10 custom_shadow border-[18px] md:border-[20px] border-scissors`}
        >
          <Move move={scissors} />
        </div>
      </div>
    </section>
  );
};
