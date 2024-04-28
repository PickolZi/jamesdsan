'use client'
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

import { FaAngleDoubleDown } from "react-icons/fa";


const ScrollDownIndicator = () => {
    return (
        <motion.div 
            className="z-10 absolute bottom-0 left-[50%] translate-x-[-50%] mb-1 text-gray-500"
            animate={{ opacity: [.20,.75,.20]}}
            transition={{ duration: 3, repeat: Infinity }}
        >
            <span className="text-inherit">Scroll down for more</span>
            <IconContext.Provider value={{ color: 'blue' }}>
                <div>
                    <FaAngleDoubleDown className="mx-auto"/>
                </div>
            </IconContext.Provider>
        </motion.div>
    )
}

export default ScrollDownIndicator;