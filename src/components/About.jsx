import React from "react";
import about from "../assets/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        ABOUT  ME
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={about}
              alt=""
              height={400}
              width={400}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-2xl">
              My journey began with a deep passion for design and an insatiable
              curiosity for the inner workings of the web. Over the years, I've
              become proficient in HTML, CSS, and JavaScript, and I've
              specialized in harnessing the power of modern front-end frameworks
              like React. I've had the opportunity to collaborate with
              cross-functional teams, from designers to back-end developers, to
              bring projects to life.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
