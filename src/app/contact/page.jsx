"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const ContactPage = () => {
  const emailAddress = "v.raghuram29@gmail.com"; // Replace with your email address
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl text-white">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <TypeAnimation
              sequence={[
                "Hello", 1000, // English
                "வணக்கம்", 1000, // Tamil
                "こんにちは", 1000, // Japanese
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              repeatType="reverse"
            />
          </motion.div>
        </div>
        {/* EMAIL DISPLAY */}
        <div className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-7 justify-center p-8 lg:p-24">
          <span className="text-center">If you want to contact me, please send an email to:</span>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
            <a href={`mailto:${emailAddress}`} className="text-black font-semibold">{emailAddress}</a>
            <button className="lg:ml-2 mt-2 lg:mt-0 bg-black rounded px-2 py-1 text-white font-semibold" onClick={copyToClipboard}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
