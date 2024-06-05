const Title = () => {
  const typingTexts = [
    "Full Stack Developer",
    "Undergraduate Computer Science Student",
    "Continuous Learner",
  ];

  return (
    <div
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/59/0d/73/590d73050637dcb12e9af999f8d6437b.gif')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative h-screen flex flex-col items-center justify-center"
    >
      <div className="text-center mb-4 lg:mb-12">
        <h1
          style={{
            fontFamily: "minecraftEvenings",
            color: "var(--color-primary)",
          }}
          className="titleText text-6xl md:text-8xl lg:text-9xl"
        >
          James San
        </h1>
        <h2 className="translate-y-[-12px] text-md md:text-xl lg:text-2xl">
          Full Stack Developer
        </h2>
      </div>

      <div className="flex flex-col min-w-[300px] md:w-[50%] gap-2">
        <button className="minecraftButton md:text-lg md:h-[2rem] lg:h-[3rem] lg:text-2xl hover:border-white">
          Experience
        </button>
        <button className="minecraftButton md:text-lg md:h-[2rem] lg:h-[3rem] lg:text-2xl hover:border-white">
          Projects
        </button>
        <button className="minecraftButton md:text-lg md:h-[2rem] lg:h-[3rem] lg:text-2xl hover:border-white">
          About Me
        </button>

        <div className="flex flex-row gap-2 mt-2">
          <button className="minecraftButton md:text-lg md:h-[2rem] lg:h-[3rem] lg:text-2xl hover:border-white flex-1">
            Tech Stack...
          </button>
          <button className="minecraftButton md:text-lg md:h-[2rem] lg:h-[3rem] lg:text-2xl hover:border-white flex-1">
            Links
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
