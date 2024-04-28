"use client"
import Experience from "./experience.component";
import CharactersPopUp from "./framer_components/charactersPopUp.component";

import { ExperienceType } from "./types";

const ExperienceList = () => {

    // Will probably make this an api call in the future.
    const experiences:ExperienceType[] = [
        {
            id: 1,
            position: "Research Data Services Intern",
            location: "San Diego Super Computer (SDSC)",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eveniet dignissimos aliquid ullam est facilis, ex aperiam fuga aliquam dolores praesentium voluptate ut debitis iste optio earum esse ducimus sequi!",
            image: "/experiences/SDSC.jpeg",
            dateFrom: new Date(2024,2,20),
            dateTo: undefined
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
    ]

    return (
        <section>
            <h1 className="text-2xl text-center">
                <CharactersPopUp text="Experience List" />
            </h1>
            {
                experiences.map((experience) => {
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
                    )
                })
            }
        </section>
    )
}

export default ExperienceList;