
import { ExperienceType } from "./types";

const Experience = ({
    id,
    title,
    desc,
    image,
    dateFrom,
    dateTo
}:ExperienceType) => {
    return (
        <div>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>desc: {desc}</p>
            <p>image: {image}</p>
            <p>dateFrom: {dateFrom?.toUTCString()}</p>
            <p>dateTo: {dateTo?.toUTCString()}</p>
        </div>        
    )
}

export default Experience;