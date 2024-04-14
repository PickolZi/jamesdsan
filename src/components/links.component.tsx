import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoNewspaper } from "react-icons/io5";


const Links = () => {
    return (
        <section>
            <h1>Learn more about me...</h1>
            <ul className="flex flex-row gap-4">
                <li>
                    <a href="#">
                        <FaLinkedin size={100} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaGithub size={100} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <SiLeetcode size={100} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <IoNewspaper size={100} />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Links;