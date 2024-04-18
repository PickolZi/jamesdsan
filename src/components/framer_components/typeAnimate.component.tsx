"use client"
import { useEffect } from "react";
import { motion, animate, useMotionValue, useTransform, useMotionValueEvent } from "framer-motion";
import CursorBlink from "./cursorBlink.component";


type props = {
    typingTexts: string[]
}

const TypeAnimate = ({typingTexts}:props) => {
    let index = 0
    let text = typingTexts[0];

    let count = useMotionValue(0);
    let rounded = useTransform(count, (round) => Math.round(round))
    let displayText = useTransform(rounded, (latest) => text.slice(0, latest))
    
    useEffect(() => {
        animate(count, text.length, {duration: 2});
    }, [])

    useMotionValueEvent(count, "animationComplete", () => {
        if (count.get() == 0) {
            index++;
            text = typingTexts[index % typingTexts.length];

            animate(count, text.length, {delay: 1, duration: 2});
        } else if (count.get() == text.length) {
            animate(count, 0, {delay: 1, duration: 2})
        }
    });

    return (
        <span className="inline text-2xl ">
            <motion.span className="text-gray-500">{displayText}</motion.span>
            <CursorBlink />
        </span>
    )
}

export default TypeAnimate;