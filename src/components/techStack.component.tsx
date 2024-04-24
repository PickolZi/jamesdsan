"use client"
import CharactersPopUp from "./framer_components/charactersPopUp.component";


const TechStack = () => {
    return (
        <section>
            <h1 className="text-2xl text-center">
                <CharactersPopUp text="Tech Stack" />
            </h1>
            <div className="flex flex-col gap-2 w-[60ch] mx-auto">
                <p className="text-lg text-gray-400">Frontend: HTML, CSS, Javascript, Typescript, React, NextJS, Tailwind, Mui, Framer Motion</p>
                <p className="text-lg text-gray-400">Backend: Python, SQL, Java, Go, Flask, Firebase</p>
                <p className="text-lg text-gray-400">Tools: Git/Github, Docker, Nginx, Linux</p>
            </div>
        </section>
    )
}

export default TechStack;