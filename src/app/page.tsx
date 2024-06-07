"use client";
import Title from "@/components/title.component";
import TransitionScreen from "@/components/transitionScreen.component";
import ListScreen from "@/components/listScreen";
import AboutMe from "@/components/aboutMe.component";
import TechStack from "@/components/techStack.component";
import ExperienceList from "@/components/experienceList.component";
import ProjectsList from "@/components/projectsList.component";
import Links from "@/components/links.component";

export default function Home() {
  return (
    <main className="bg-black">
      <TransitionScreen imgUrl="https://i.pinimg.com/originals/59/0d/73/590d73050637dcb12e9af999f8d6437b.gif">
        <Title />
      </TransitionScreen>
      <TransitionScreen imgUrl="https://i.redd.it/841666uly00b1.gif">
        <h1 className="text-4xl">About Me</h1>
      </TransitionScreen>
      <ListScreen title="aboutMe">
        <AboutMe />
      </ListScreen>
      <TransitionScreen imgUrl="https://i.redd.it/841666uly00b1.gif">
        <h1 className="text-4xl">Experience</h1>
      </TransitionScreen>
      <ListScreen title="experience">
        <ExperienceList />
      </ListScreen>
      <TransitionScreen imgUrl="https://i.redd.it/841666uly00b1.gif">
        <h1 className="text-4xl">Projects</h1>
      </TransitionScreen>
      <ListScreen title="projects">
        <ProjectsList />
      </ListScreen>
      <TechStack />
      <Links />
    </main>
  );
}
