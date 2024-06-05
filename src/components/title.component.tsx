const Title = () => {
  const typingTexts = [
    "Full Stack Developer",
    "Undergraduate Computer Science Student",
    "Continuous Learner",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <Heading />
      <Options />
    </div>
  );
};

const Heading = () => {
  return (
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
  );
};

const Options = () => {
  return (
    <div className="flex flex-col min-w-[300px] md:w-[50%] gap-2">
      <a
        href="#experience"
        className="minecraftButton md:text-lg md:h-[2rem] lg:h-[3rem] lg:text-2xl hover:border-white text-center"
      >
        Experience
      </a>
      <a
        href="#"
        className="minecraftButton md:text-lg md:h-[2rem] lg:h-[3rem] lg:text-2xl hover:border-white text-center"
      >
        Projects
      </a>
      <a
        href="#"
        className="minecraftButton md:text-lg md:h-[2rem] lg:h-[3rem] lg:text-2xl hover:border-white text-center"
      >
        About Me
      </a>

      <div className="flex flex-row gap-2 mt-2">
        <a
          href="#"
          className="minecraftButton md:text-lg md:h-[2rem] lg:h-[3rem] lg:text-2xl hover:border-white text-center flex-1"
        >
          Tech Stack...
        </a>
        <a
          href="#"
          className="minecraftButton md:text-lg md:h-[2rem] lg:h-[3rem] lg:text-2xl hover:border-white text-center flex-1"
        >
          Links
        </a>
      </div>
    </div>
  );
};

export default Title;
