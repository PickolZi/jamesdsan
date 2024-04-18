import { motion } from "framer-motion";
import { jsx } from "react/jsx-runtime";


type Props = {
    text:string
}

const CharactersPopUp = ({text}:Props) => {
    let charDelay = 0;

    return (
        <div>
            {text.split(" ").map((word) => {
                const res = (word.split("").map((char) => {
                    charDelay += 0.1;  // Character delay of 100ms.
                    return (
                        <motion.span
                            initial={{
                                opacity: 0,
                                translateY: "16px"
                            }}
                            animate={{
                                opacity: 1,
                                translateY: "0%"
                            }}
                            transition={{
                                duration: 3,
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