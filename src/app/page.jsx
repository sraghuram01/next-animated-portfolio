"use client"
import {useEffect, useState} from "react";
import puzzleAnimation from "./puzzle.json";
import { motion } from "framer-motion";
import Link from "next/link";
import Lottie from "lottie-react";


const Homepage = () => {
const [isAnimationPlaying, setIsAnimationPlaying]=useState(false);
useEffect(() => {
  // Start animation when component mounts
  setIsAnimationPlaying(true);

  // Cleanup function to stop animation when component unmounts
  return () => setIsAnimationPlaying(false);
}, []);







  const handleDownloadCV = () => {
    // Replace '/path/to/resume.pdf' with the actual path to your PDF resume
    const resumeUrl = '/resume/resume.pdf';
    
    // Create a hidden anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf'; // Specify the filename for the downloaded file
    link.style.display = 'none';
    
    // Add the anchor element to the document
    document.body.appendChild(link);
    
    // Trigger a click on the anchor element
    link.click();
    
    // Remove the anchor element from the document
    document.body.removeChild(link);
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
        <div className="h-1/2 lg:h-1/2 lg:w-1/2 relative z-0">
          {/* Puzzle Animation */}
          <Lottie
            loop={true}
            animationData={puzzleAnimation}
            autoplay={isAnimationPlaying}
            height={200}
            width={200}
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center z-10">
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
            <button className="p-4 rounded-md ring-1 ring-orange-500 text-orange-500" onClick={handleDownloadCV}>
              Resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;