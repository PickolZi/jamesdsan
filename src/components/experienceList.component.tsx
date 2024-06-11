"use client";
import Experience from "./experience.component";

import TransitionScreen from "./transitionScreen.component";

import { ExperienceType } from "./types";

const ExperienceList = () => {
  // Will probably make this an api call in the future.
  const experiences: ExperienceType[] = [
    {
      id: 1,
      position: "Research Data Services Intern",
      location: "San Diego Supercomputer Center (SDSC)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet dignissimos aliquid ullam est facilis, ex aperiam fuga aliquam dolores praesentium voluptate ut debitis iste optio earum esse ducimus sequi!",
      image: "/experiences/SDSC.jpeg",
      dateFrom: new Date(2024, 2, 20),
      dateTo: undefined,
    },
    // {
    //     id: 2,
    //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet dignissimos aliquid ullam est facilis, ex aperiam fuga aliquam dolores praesentium voluptate ut debitis iste optio earum esse ducimus sequi!",
    //     location: "",
    //     position: "Freelancer",
    //     image: "/experiences/SDSC.jpeg",
    //     dateFrom: new Date(2024,2,20),
    //     dateTo: new Date(2024,2,20)
    // },
    // {
    //     id: 3,
    //     desc: "Taught programming and introduced opportunities within the Science, Technology, Engineering, and Math(STEM) field to low-incomed high school students.",
    //     location: "San Gabriel High School",
    //     position: "Math Engineering Science Achievement(MESA) President",
    //     image: "/experiences/SDSC.jpeg",
    //     dateFrom: new Date(2024,2,20),
    //     dateTo: new Date(2024,2,20)
    // }
  ];

  return (
    <TransitionScreen
      id="experience"
      imgUrl="https://c4.wallpaperflare.com/wallpaper/226/682/452/minecraft-waterfall-video-games-wallpaper-preview.jpg"
    >
      <div className="container h-screen flex flex-col justify-center">
        <div className="relative h-[300px]">
          <h1 className="headerText">Experience</h1>
        </div>

        <div className="flex-grow">
          {experiences.map((experience) => {
            return (
              <Experience
                key={experience["id"]}
                id={experience["id"]}
                position={experience["position"]}
                location={experience["location"]}
                desc={experience["desc"]}
                image={experience["image"]}
                dateFrom={experience["dateFrom"]}
                dateTo={experience["dateTo"]}
              />
            );
          })}
        </div>
      </div>
    </TransitionScreen>
  );
};

const BackgroundImage = ({ imgUrl }: { imgUrl: String }) => {
  return (
    <div
      className="sticky z-0 top-0 h-screen"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
};

export default ExperienceList;
