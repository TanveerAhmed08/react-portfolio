import React from "react";
import Logo from "../assets/boy.png";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,

    transition: { duration: 0.5, delay: delay },
  },
});
const container2 = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,

    transition: { duration: 0.5, delay: delay },
  },
});

const Intro = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-7 text-6xl font-sans tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r  from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight"
            >
              TANVEER AHMED 
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I'm a seasoned front-end developer with fresh experience create
              website using programming languages such as HTML, CSS, JavaScript.
              <br />
              And using libraries such as BootStrap, tailwind.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
             variants={container2(1.5)}
             initial="hidden"
             animate="visible"
            src={Logo} alt="" height={300} width={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
