"use client"
import { motion } from "framer-motion";

const CursorBlink = () => {
    return (
        <motion.div
            className="inline-block h-5 w-[1px] translate-y-1 bg-white"
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
        />
    )
}

export default CursorBlink;