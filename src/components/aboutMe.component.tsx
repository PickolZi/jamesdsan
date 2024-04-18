"use client"
import Image from "next/image";

import CharactersPopUp from "./framer_components/CharactersPopUp.component";
import {motion} from 'framer-motion';


const AboutMe = () => {
    return (
        <section>
            <motion.h1 
                className="text-2xl"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, ease: "anticipate"}}
            >
                About Me
            </motion.h1>
            <CharactersPopUp text="asdfjkl" />
            

            <div>
                {/* Starts off with one image, then as the user scrolls down, the rest will glide in and replace the previous image. User will be able to hover over specific image to pull the card to the front. */}
                <Image 
                    src={"/aboutMe/meProm.jpg"}
                    alt="Picture of me gazing at the stars"
                    width={300}
                    height={300}
                    className="rounded-md w-[300px] h-[300px] object-cover hover:scale-125"
                />
                {/* <Image 
                    src={"/aboutMe/meGym.jpg"}
                    alt="Picture of me gazing at the stars"
                    width={300}
                    height={300}
                    className="rounded-md w-[300px] h-[300px] object-cover hover:scale-125"
                /> */}
                {/* <Image 
                    src={"/aboutMe/meFriends1.jpg"}
                    alt="Picture of me gazing at the stars"
                    width={300}
                    height={300}
                    className="rounded-md w-[300px] h-[300px] object-cover hover:scale-125"
                /> */}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-lg text-gray-400">Hi, i&apos;m james!</p>
                <p className="text-lg text-gray-400">I am a fullstack developer mostly self-taught through side projects, books, Udemy courses, and YouTube. I am also currently pursuing for my Bachelor&apos;s degree in Computer Science.</p>
                <p className="text-lg text-gray-400">In my free time I enjoy creating solutions through code, reading books, exercising, and having fun with friends!</p>
            </div>
            
        </section>
    )
}

export default AboutMe;