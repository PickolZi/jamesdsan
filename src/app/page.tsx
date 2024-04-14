import Title from "@/components/title.component";
import AboutMe from "@/components/aboutMe.component";
import TechStack from "@/components/techStack.component";
import ExperienceList from "@/components/experienceList.component";
import ProjectsList from "@/components/projectsList.component";
import Links from "@/components/links.component";

import VerticalProgressBar from "@/components/verticalProgressBar.component";


export default function Home() {
  return (
    <>
      {/* Setting background and a filter over it */}
      <div className="h-screen w-screen bg-[url('/background.png')] fixed top-0 left-0 bg-cover bg-center z-0" />
      <div className="h-screen w-screen bg-black fixed top-0 left-0 opacity-75 z-0" />

      <VerticalProgressBar />
      {/* <div className="relative h-[50vh] w-screen" /> */}

      <Title />
      <AboutMe />
      <TechStack />
      <ExperienceList />
      <ProjectsList />
      <Links />

    </>
  );
}
