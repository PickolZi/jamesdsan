import { ProjectType } from "./types";

import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

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

const Project = ({
  id,
  title,
  subtitle,
  desc,
  date,
  image,
  languages,
  github,
  link,
}: ProjectType) => {
  return (
    <div className="container h-full relative mx-auto">
      <Image
        src={image}
        alt={`${title} image`}
        width={1920}
        height={1080}
        // className="w-full min-w-[256px]"
      />

      <div className="relative dim-background">
        <p>{title}</p>
        {/* <p>{subtitle}</p> */}
        <p className="max-w-[60ch]">{desc}</p>

        <p className="absolute top-0 right-0">
          {months[date.getMonth()]} {date.getFullYear()}
        </p>

        <div className="flex flex-row">
          <a href={github} target="_blank">
            <FaGithub size={32} />
          </a>
          <a href={link} target="_blank">
            <HiOutlineExternalLink size={32} />
          </a>
        </div>

        <p className="absolute bottom-0 right-0">{languages}</p>
      </div>
    </div>
  );
};

export default Project;
