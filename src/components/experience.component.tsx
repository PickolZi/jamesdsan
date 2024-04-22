"use client"
import { ExperienceType } from "./types";

import Image from "next/image";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Experience = ({
    id,
    position,
    location,
    desc,
    image,
    dateFrom,
    dateTo
}:ExperienceType) => {
    return (
        <div>
            <div className="relative">
                <Image 
                    src={image}
                    alt={`${location} ${position} picture`}
                    width={300}
                    height={300}
                    className="w-full h-[300] opacity-80"
                />

                <div className="absolute bottom-0 left-0">
                    <p>{position}</p>
                    { location &&
                        <p>@{location}</p>
                    }
                </div>

                <div className="absolute bottom-0 right-0">
                    { dateFrom && 
                        <span>{months[dateFrom.getMonth()]} {dateFrom?.getFullYear()} - </span>
                    }
                    { dateTo ?
                        <span>{months[dateTo.getMonth()]} {dateTo.getFullYear()}</span> :
                        <span>present</span>
                    }
                </div>
            </div>
            <p>{desc}</p>
        </div>        
    )
}

export default Experience;