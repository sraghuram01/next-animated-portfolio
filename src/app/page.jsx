"use client";

import Image from "next/image";
import { motion } from "framer-motion";



const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-1/2 lg:w-1/2 relative z-0">
          <Image src="/elephant-image.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center z-10">
          {/* TITLE */}
          <h2 className="text-4xl md:text-3xl font-bold">
           Hello! I'm Varun
          </h2>
        
          {/* DESC */}
          <p className="md:text-lg">
          Welcome to my digital space, where creativity and innovation come together seamlessly. As a designer, I'm dedicated to crafting engaging digital experiences. With a diverse skill set covering end-to-end design, collaboration, and strategic alignment with user goals,
           I focus on delivering solutions that make a meaningful impact.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-md ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-md ring-1 ring-black">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
