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
      <TransitionScreen id="title" imgUrl="https://i.pinimg.com/originals/59/0d/73/590d73050637dcb12e9af999f8d6437b.gif">
        <Title />
      </TransitionScreen>
      <TransitionScreen id="aboutMeTransition" imgUrl="https://i.redd.it/841666uly00b1.gif">
        <h1 className="text-4xl">About Me</h1>
      </TransitionScreen>
      <TransitionScreen id="aboutMe" imgUrl="https://i.pinimg.com/originals/ec/d6/72/ecd67255b08380eb534d3f8ee397bc85.gif">
        <AboutMe />
      </TransitionScreen>
      <TransitionScreen id="experienceTransition" imgUrl="https://i.redd.it/841666uly00b1.gif">
        <h1 className="text-4xl">Experience</h1>
      </TransitionScreen>
      <TransitionScreen id="experience" imgUrl="https://i.gyazo.com/c3b3a3970256a3fe47622f0a8a367b7e.gif">
        <ExperienceList />
      </TransitionScreen>
      <TransitionScreen id="projectsTransition" imgUrl="https://i.redd.it/841666uly00b1.gif">
        <h1 className="text-4xl">Projects</h1>
      </TransitionScreen>
      <TransitionScreen id="projects" imgUrl="https://i.pinimg.com/originals/62/b9/c0/62b9c02db463b4b6d07b44919267922a.gif">
        <ProjectsList />
      </TransitionScreen>
      <ListScreen title="techStack">
        <TechStack />
      </ListScreen>
      <ListScreen title="links">
        <Links />
      </ListScreen>
    </main>
  );
}
