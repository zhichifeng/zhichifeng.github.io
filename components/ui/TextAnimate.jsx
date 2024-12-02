"use client"

import { FC, useEffect, useState,useRef } from "react"
import { HTMLMotionProps, motion, useAnimation, useInView } from "framer-motion"


  const Props = {
    text: String,
    type: String,
    delay: Number,
    duration: Number,
  };

const animationVariants = {

  fadeInUp: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    },
    child: {
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, y: 20 },
    },
  },

}

const TextAnimate = ({
  text,
  type = "whipInUp",
  ...props
}) => {
  //   const { ref, inView } = useInView({
  //     threshold: 0.5,
  //     triggerOnce: true,
  //   });

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const letters = Array.from(text)
  const { container, child } = animationVariants[type]

  const ctrls = useAnimation()

  //   useEffect(() => {
  //     if (isInView) {
  //       ctrls.start("visible");
  //     }
  //     if (!isInView) {
  //       ctrls.start("hidden");
  //     }
  //   }, [ctrls, isInView]);

  if (type === "fadeInUp" ) {
   
  }

  return (
    <motion.h2
      style={{ display: "flex", overflow: "hidden" }}
      role="heading"
      variants={container}
      initial="hidden"
      animate="visible"
      className="mt-10 text-4xl font-black text-black dark:text-neutral-100 py-5 pb-8 px-8 md:text-5xl"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  )
}

export { TextAnimate }

