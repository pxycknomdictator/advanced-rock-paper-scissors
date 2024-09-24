import scores from "/images/logo.svg";

export const Scoreboard = () => {
  return (
    <section className="flex items-center justify-between w-[85%] mx-auto md:w-[75%] xl:w-[65%] border-[3px] rounded-lg py-2.5 px-3 border-headerOutline">
      <div>
        <img className="w-[60%] sm:w-full" src={scores} alt="logo" />
      </div>
      <div className="bg-white py-4 px-9 smd:py-2.5 sm:px-10 rounded-md text-center -space-y-1">
        <span className="uppercase text-scoreText font-bold">score</span>
        <p className="text-4xl sm:text-5xl font-bold text-darkText">0</p>
      </div>
    </section>
  );
};
