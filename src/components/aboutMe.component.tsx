"use client";
import Image from "next/image";

import TransitionScreen from "./transitionScreen.component";

const AboutMe = () => {
  return (
    <TransitionScreen
      id="aboutMe"
      imgUrl="https://wallpapercave.com/wp/wp2673417.jpg"
    >
      <div className="flex flex-col h-screen relative">
        <div className="relative h-[300px]">
          <h1 className="headerText">About Me</h1>
        </div>

        <div className="container flex flex-grow flex-col justify-center items-center">
          <Image
            src={"/aboutMe/meProm.jpg"}
            alt="Picture of James San from his senior prom night."
            width={256}
            height={256}
            className="relative mx-auto rounded-full w-[256px] h-[256px] object-cover"
          />

          <div className="dim-background flex flex-col gap-4 max-w-[60ch] mx-auto">
            <p className="text-lg">Hi, i&apos;m james!</p>
            <p className="text-lg">
              I am a fullstack developer mostly self-taught through side
              projects, books, Udemy courses, and YouTube. I am also currently
              pursuing for my Bachelor&apos;s degree in Computer Science.
            </p>
            <p className="text-lg">
              In my free time I enjoy creating solutions through code, reading
              books, exercising, and having fun with friends!
            </p>
          </div>
        </div>
      </div>
    </TransitionScreen>
  );
};

export default AboutMe;
