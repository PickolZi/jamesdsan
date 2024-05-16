import { motion } from "framer-motion";


type Props = {
    text:string
}

const CharactersPopUp = ({text}:Props) => {
    let charDelay = 0;

    return (
        <div className="overflow-hidden">
            {text.split(" ").map((word, wordIndex) => (
                <span key={`word-${wordIndex}`}>
                    { word.split("").map((char, charIndex) => {
                        charDelay += 0.1;  // Character delay of 100ms.
                        return (
                            <motion.span
                                key={`word-${wordIndex}-char-${charIndex}`}
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
                    })}
                    &nbsp; 
                </span>
            ))}
        </div>
    )
}

export default CharactersPopUp;