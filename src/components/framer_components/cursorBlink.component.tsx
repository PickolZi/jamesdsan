"use client"
import { motion } from "framer-motion";

const CursorBlink = () => {
    return (
        <motion.div
            className="inline-block"
            animate={{
                opacity: [0,0,1,1],
            }}
            transition = {{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
                ease: 'linear',
                times: [0,0.5,0.5,1]
            }}
        >|</motion.div>
    )
}

export default CursorBlink;