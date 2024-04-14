import Project from "./project.component";

import { ProjectType } from "./types";


const ProjectsList = () => {

    // Will probably make this an api call in the future.
    const projects:ProjectType[] = [
        {
            title: "Itemiz - Organize your ebay inventory",
            desc: "An automative car parts shop had trouble organizing and finding the items they were selling on ebay, so I created Itemiz. Itemiz is a web application that connects your existing ebay inventory with a simple and easy to use dashboard to filter and update locations and other ebay item data. Itemiz also gives users the ability to print out labels with QR codes for mobile editing, as well as informing them when a customer has made a purchase. After incorporating Itemiz into their business, the automative car parts shop was able to scale their online business 300% from struggling to find items within their inventory of 500 ebay items, to knowing exactly where all their products were of 1500+ ebay items.",
            date: new Date(),
            image: "https://www.imageOfSakuraMiko.png",
            languages: ["Ebay API", "React", "Flask", "Firebase", "SQLite"],
            github: "https://github.com/PickolZi/Ebay-Inventory-Management",
            link: "https://www.bassetinventory.com",
        },
        {
            title: "Spotify Music Downloader",
            desc: "View and download spotify music from you or any public spotify profile. Note: for educational purposes only.",
            date: new Date(),
            image: "https://www.imageOfSakuraMiko.png",
            languages: ["Flask", "Redis", "Docker"],
            github: "https://github.com/PickolZi/flask-spotify-music-downloader",
            link: "http://45.33.33.207/",
        },

    ]

    return (
        <section>
            <h1>Personal ProjectsList</h1>
            {projects.map((project) => {
                return (
                    <Project
                        title={project["title"]}
                        desc={project["desc"]}
                        date={project["date"]}
                        image={project["image"]}
                        languages={project["languages"]}
                        github={project["github"]}
                        link={project["link"]}
                    />
                )
            })}
        </section>
    )
}

export default ProjectsList;