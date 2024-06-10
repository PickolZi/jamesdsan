"use client";
import Image from "next/image";

import TransitionScreen from "./transitionScreen.component";

const AboutMe = () => {
  return (
    <TransitionScreen
      id="aboutMe"
      imgUrl="https://i.pinimg.com/originals/ec/d6/72/ecd67255b08380eb534d3f8ee397bc85.gif"
    >
      <section>
        <div>
          <h1 className="text-2xl text-center mb-2">About Me</h1>
          <div>
            <Image
              src={"/aboutMe/meProm.jpg"}
              alt="Picture of me gazing at the stars"
              width={300}
              height={300}
              className="relative mx-auto rounded-md w-[300px] h-[300px] object-cover"
            />

            <div className="flex flex-col gap-4 max-w-[60ch] mx-auto">
              <p className="text-lg text-gray-400">Hi, i&apos;m james!</p>
              <p className="text-lg text-gray-400">
                I am a fullstack developer mostly self-taught through side
                projects, books, Udemy courses, and YouTube. I am also currently
                pursuing for my Bachelor&apos;s degree in Computer Science.
              </p>
              <p className="text-lg text-gray-400">
                In my free time I enjoy creating solutions through code, reading
                books, exercising, and having fun with friends!
              </p>
            </div>
          </div>

          {/* <div>
            <Image
              src={"/aboutMe/books.jpg"}
              alt="Picture of me gazing at the stars"
              width={300}
              height={300}
              className="relative mx-auto rounded-md w-[300px] h-[300px] object-cover"
            />

            <div className="flex flex-col gap-4 max-w-[60ch] mx-auto">
              <p className="text-lg text-gray-400">Hi, i&apos;m james!</p>
              <p className="text-lg text-gray-400">
                I am a fullstack developer mostly self-taught through side
                projects, books, Udemy courses, and YouTube. I am also currently
                pursuing for my Bachelor&apos;s degree in Computer Science.
              </p>
              <p className="text-lg text-gray-400">
                In my free time I enjoy creating solutions through code, reading
                books, exercising, and having fun with friends!
              </p>
            </div>
          </div> */}

          {/* <div>
            <Image
              src={"/aboutMe/meGym.jpg"}
              alt="Picture of me gazing at the stars"
              width={300}
              height={300}
              className="relative mx-auto rounded-md w-[300px] h-[300px] object-cover"
            />

            <div className="flex flex-col gap-4 max-w-[60ch] mx-auto">
              <p className="text-lg text-gray-400">Hi, i&apos;m james!</p>
              <p className="text-lg text-gray-400">
                I am a fullstack developer mostly self-taught through side
                projects, books, Udemy courses, and YouTube. I am also currently
                pursuing for my Bachelor&apos;s degree in Computer Science.
              </p>
              <p className="text-lg text-gray-400">
                In my free time I enjoy creating solutions through code, reading
                books, exercising, and having fun with friends!
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </TransitionScreen>
  );
};

export default AboutMe;
