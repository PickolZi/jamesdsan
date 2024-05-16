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
                    <a href="https://www.linkedin.com/in/james-san-494b481b2/" target="_blank">
                        <FaLinkedin size="full"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/PickolZi" target="_blank">
                        <FaGithub size="full" />
                    </a>
                </li>
                {/* <li>
                    <a href="#" target="_blank">
                        <SiLeetcode size="full" />
                    </a>
                </li> */}
                <li>
                    <a href="https://drive.google.com/file/d/17VIidg5zEencKOimlHa-tpipZD0tAUM0/view?sp=drive_link" target="_blank">
                        <IoNewspaper size="full" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Links;