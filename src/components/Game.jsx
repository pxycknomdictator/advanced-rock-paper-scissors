// import { MatchCompare } from "./MatchCompare";
import { NormalMode } from "./NormalMode";

export const Game = () => {
  return (
    <>
      <section className="relative size-[380px] md:size-[470px] mt-16 md:mt-10 mx-auto">
        <NormalMode />
      </section>
      {/* <section className="relative custom_screen:w-[80%] md:w-[750px] mx-auto mt-16 md:mt-10">
        <MatchCompare />
      </section> */}
    </>
  );
};
