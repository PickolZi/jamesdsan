import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";

import { motion } from "framer-motion";


const HorizontalScrollContainer = ({children}:{children: React.ReactNode}) => {
    const horizontalScrollContainerRef = useRef(null);
    // const {scrollX} = useScroll({
    //     target: horizontalScrollContainerRef
    // });
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, "change", () => {
        console.log(scrollY.get());
    });
     

    return (
        <motion.div 
            ref={horizontalScrollContainerRef} 
            className="snap-x snap-mandatory w-full flex flex-row gap-1 overflow-x-scroll"
            onClick={(e) => {console.log(scrollY.get())}}
        >
            {children}
        </motion.div>
    )
}

export default HorizontalScrollContainer;