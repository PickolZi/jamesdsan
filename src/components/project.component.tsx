import { ProjectType } from "./types";


const Project = ({
    id,
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
            <p>id: {id.toFixed()}</p>
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