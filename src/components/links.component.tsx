"use client"
import CharactersPopUp from "./framer_components/charactersPopUp.component";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoNewspaper } from "react-icons/io5";


const Links = () => {
    return (
        <section>
            <h1 className="text-2xl">
                <CharactersPopUp text="Learn more about me..." />
            </h1>

            <ul className="flex flex-row gap-4 max-w-[600px]">
                <li>
                    <a href="#">
                        <FaLinkedin size="full"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaGithub size="full" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <SiLeetcode size="full" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <IoNewspaper size="full" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Links;