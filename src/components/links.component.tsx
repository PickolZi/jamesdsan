"use client";

import ListScreen from "./listScreen";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";

const Links = () => {
  return (
    <ListScreen title="links">
      <div className="container">
        <ul className="flex flex-col gap-[1rem]">
          <li className="hover:bg-stone-800/80">
            <a
              href="https://www.linkedin.com/in/james-san-494b481b2/"
              target="_blank"
              className="flex flex-row gap-[0.25rem]"
            >
              <FaLinkedin size="128px" />
              <h2 className="text-2xl">LinkedIn</h2>
            </a>
          </li>
          <li className="hover:bg-stone-800/80">
            <a
              href="https://github.com/PickolZi"
              target="_blank"
              className="flex flex-row gap-[0.25rem]"
            >
              <FaGithub size="128px" />
              <h2 className="text-2xl">Github</h2>
            </a>
          </li>
          <li className="hover:bg-stone-800/80">
            <a
              href="https://drive.google.com/file/d/17VIidg5zEencKOimlHa-tpipZD0tAUM0/view?sp=drive_link"
              target="_blank"
              className="flex flex-row gap-[0.25rem]"
            >
              <IoNewspaper size="128px" />
              <h2 className="text-2xl">Resume</h2>
            </a>
          </li>
        </ul>
      </div>
    </ListScreen>
  );
};

export default Links;
