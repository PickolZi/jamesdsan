import { motion } from "framer-motion";


type Props = {
    text:string
}

const CharactersPopUp = ({text}:Props) => {
    let charDelay = 0;

    return (
        <div className="overflow-hidden">
            {text.split(" ").map((word) => {
                const res = (word.split("").map((char) => {
                    charDelay += 0.1;  // Character delay of 100ms.
                    return (
                        <motion.span
                            className="inline-block"
                            initial={{
                                opacity: 0,
                                translateY: "100%"
                            }}
                            whileInView={{
                                opacity: 1,
                                translateY: "0%"
                            }}
                            viewport={{once: true}}
                            transition={{
                                duration: 0.5,
                                delay: charDelay
                            }}
                        >
                           {char}
                        </motion.span>
                    )
                })) 
                res.push(<> </>)  // Adds space after each word.
                return res;
            })}
        </div>
    )
}

export default CharactersPopUp;