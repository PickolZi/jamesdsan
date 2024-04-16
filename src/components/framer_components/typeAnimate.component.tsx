"use client"
import { useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import CursorBlink from "./cursorBlink.component";


type props = {
    text: string
}

const TypeAnimate = ({text}:props) => {
    const textLength = text.length;
    const count = useMotionValue(0);

    useEffect(() => {
        const controls = animate(count, textLength, {
            duration: 1
        });

        // return controls.stop;
    }, [])

    const rounded = useTransform(count, (round) => Math.round(round))
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest))

    return (
        <h1>
            <motion.span>{displayText}</motion.span>
            <CursorBlink />
        </h1>
    )
}

export default TypeAnimate;