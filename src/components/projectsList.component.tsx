"use client";
import Project from "./project.component";

import TransitionScreen from "./transitionScreen.component";

import { ProjectType } from "./types";

const ProjectsList = () => {
  // Will probably make this an api call in the future.
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Itemiz",
      subtitle: "Organize your ebay inventory",
      desc: "An automotive parts shop had trouble organizing their ebay inventory, so I created Itemiz, a web application that connects to your existing ebay inventory with a simple and easy to use dashboard to filter and update item locations. Notifying the merchant when a customer has made a purchase, Itemiz was able to scale their online business 300% from struggling to find items within their inventory of 500 ebay items, to knowing the locations of 1500+ ebay items.",
      date: new Date(2024, 2, 20),
      image: "/projects/project_itemiz.png",
      languages: ["Ebay API", "React", "Flask", "Firebase", "SQLite"],
      github: "https://github.com/PickolZi/Ebay-Inventory-Management",
      link: "https://www.bassetinventory.com",
    },
    // {
    //     id: 2,
    //     title: "Spotify Music Downloader",
    // subtitle: "",
    //     desc: "View and download spotify music from you or any public spotify profile. Note: for educational purposes only.",
    //     date: new Date(2023,8,24),
    //     image: "/projects/project_sticky_notes.png",
    //     languages: ["Flask", "Redis", "Docker"],
    //     github: "https://github.com/PickolZi/flask-spotify-music-downloader",
    //     link: "http://45.33.33.207/",
    // },
  ];

  return (
    <TransitionScreen
      id="projects"
      imgUrl="https://wallpapers.com/images/hd/minecraft-forest-wall-bridge-8nwqlzr0b5hcm133.jpg"
    >
      <div className="container h-screen flex flex-col justify-center">
        <div className="relative h-[300px]">
          <h1 className="headerText">Projects</h1>
        </div>

        <div className="flex-grow">
          {projects.map((project) => {
            return (
              <Project
                key={project["id"]}
                id={project["id"]}
                title={project["title"]}
                subtitle={project["subtitle"]}
                desc={project["desc"]}
                date={project["date"]}
                image={project["image"]}
                languages={project["languages"]}
                github={project["github"]}
                link={project["link"]}
              />
            );
          })}
        </div>
      </div>
    </TransitionScreen>
  );
};

export default ProjectsList;
