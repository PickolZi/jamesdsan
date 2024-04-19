"use client"
import Experience from "./experience.component";
import CharactersPopUp from "./framer_components/charactersPopUp.component";

import { ExperienceType } from "./types";

const ExperienceList = () => {

    // Will probably make this an api call in the future.
    const experiences:ExperienceType[] = [
        {
            id: 1,
            title: "San Diego Super Computer(SDSC)",
            desc: "TBD",
            image: "https://www.randomImage.com/",
            dateFrom: new Date(2024,2,20),
            dateTo: new Date(2024,2,20)
        },
        {
            id: 2,
            title: "Freelancer",
            desc: "TBD",
            image: "https://www.randomImage.com/",
            dateFrom: new Date(2024,2,20),
            dateTo: new Date(2024,2,20)
        },
        {
            id: 3,
            title: "Math Engineering Science Achievement(MESA) President",
            desc: "Taught programming and introduced opportunities within the Science, Technology, Engineering, and Math(STEM) field to low-incomed high school students.",
            image: "https://www.randomImage.com/",
            dateFrom: new Date(2024,2,20),
            dateTo: new Date(2024,2,20)
        }
    ]

    return (
        <section>
            <h1 className="text-2xl">
                <CharactersPopUp text="Experience List" />
            </h1>
            {
                experiences.map((experience) => {
                    return (
                        <Experience
                            key={experience["id"]}
                            id={experience["id"]}
                            title={experience["title"]}
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