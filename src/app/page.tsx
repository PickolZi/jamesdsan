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
      <Title />
      {/* <TransitionScreen imgUrl="https://i.redd.it/841666uly00b1.gif" /> */}
      <AboutMe />
      <ExperienceList />
      <ProjectsList />
      <ListScreen title="techStack">
        <TechStack />
      </ListScreen>
      <Links />
    </main>
  );
}
