"use client"
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component from Next.js
import Link from "next/link";

const Homepage = () => {
  const handleDownloadCV = () => {
    // Your download CV function
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="lg:w-1/2 relative z-0">
          {/* Puzzle GIF */}
          <Image
            src="/puzzle.gif" // Replace with the path to your puzzle.gif file
            alt="Puzzle Animation"
            layout="responsive"
            width={200} // Adjust the width of the image
            height={200} // Adjust the height of the image
            className="lg:max-w-full"
            unoptimized // Set max-width to prevent overflow on larger screens
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center z-10 lg:pl-8">
          {/* TITLE */}
          <h2 className="text-4xl md:text-3xl text-white font-bold">
            Hello! I&apos;m Varun
          </h2>
          {/* DESC */}
          <p className="md:text-lg text-white">
            Welcome to my digital space, where creativity and innovation come together seamlessly. As a designer, I&apos;m dedicated to crafting engaging digital experiences. With a diverse skill set covering end-to-end design, collaboration, and strategic alignment with user goals,
            I focus on delivering solutions that make a meaningful impact.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-md ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <button
              className="p-4 rounded-md ring-1 ring-orange-500 text-orange-500"
              onClick={handleDownloadCV}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
