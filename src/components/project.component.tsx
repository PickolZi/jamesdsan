import { ProjectType } from "./types";


const Project = ({
    title, 
    desc, 
    date, 
    image, 
    languages,
    github,
    link,
}:ProjectType) => {
    return (
        <div>
            <h1>Project: </h1>
            <p>title: {title}</p>
            <p>desc: {desc}</p>
            <p>date: {date.toUTCString()}</p>
            <p>image: {image}</p>
            <p>languages: {languages}</p>
            <p>github: {github}</p>
            <p>link: {link}</p>
        </div>
    )
}

export default Project;