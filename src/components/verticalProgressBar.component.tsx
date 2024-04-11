"use client"
import {motion, useScroll } from 'framer-motion';


const VerticalProgressBar = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div 
            className="fixed top-0 left-[1rem] md:left-[2rem] lg:left-[4rem] xl:left-[8rem] w-1 h-screen bg-green-400 origin-top" 
            style={{ scaleY: scrollYProgress}}
        />
    )
}

export default VerticalProgressBar;