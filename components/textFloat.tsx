import { motion } from "framer-motion"

export function TextFloat(props: any) {
    return (
        <>
            <motion.span
                animate={{
                    y: [0, 3, 0], // animate y position to create floating effect
                }}
                transition={{
                    duration: 2, // duration of one cycle
                    repeat: Infinity, // repeat infinitely
                    ease: 'easeInOut', // easing for smooth animation
                }}
                className="text-6xl font-bold text-slate-500 inline-block"
            >
                {props.text}
            </motion.span>
        </>
    );
}