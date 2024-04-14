import Experience from "./experience.component";

import { ExperienceType } from "./types";

const ExperienceList = () => {

    const experiences:ExperienceType[] = [
        {
            title: "San Diego Super Computer(SDSC)",
            desc: "TBD",
            image: "https://www.randomImage.com/",
            dateFrom: new Date(),
            dateTo: new Date()
        },
        {
            title: "Freelancer",
            desc: "TBD",
            image: "https://www.randomImage.com/",
            dateFrom: new Date(),
            dateTo: new Date()
        },
        {
            title: "Math Engineering Science Achievement(MESA) President",
            desc: "Taught programming and introduced opportunities within the Science, Technology, Engineering, and Math(STEM) field to low-incomed high school students.",
            image: "https://www.randomImage.com/",
            dateFrom: new Date(),
            dateTo: new Date()
        }
    ]

    return (
        <section>
            {
                experiences.map(() => {
                    return (
                        <Experience />
                    )
                })
            }
        </section>
    )
}

export default ExperienceList;