"use client";
import { ExperienceType } from "./types";

import Image from "next/image";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Experience = ({
  id,
  position,
  location,
  desc,
  image,
  dateFrom,
  dateTo,
}: ExperienceType) => {
  return (
    <div className="relative p-4 max-w-[600px] mx-auto">
      <Image
        src={image}
        alt={`${location} ${position} picture`}
        width={300}
        height={300}
        className="w-full h-[300] opacity-80"
      />

      <div className="relative flex flex-col dim-background rounded-t-none">
        <h3 className="text-right">
          {dateFrom && (
            <span>
              {months[dateFrom.getMonth()]} {dateFrom.getFullYear()} -{" "}
            </span>
          )}
          {dateTo ? (
            <span>
              {months[dateTo.getMonth()]} {dateTo.getFullYear()}
            </span>
          ) : (
            <span>present</span>
          )}
        </h3>

        <h3>{position}</h3>
        {location && <h3>@{location}</h3>}

        {/* <p className="mt-2 max-w-[60ch]">{desc}</p> */}
      </div>
    </div>
  );
};

export default Experience;
