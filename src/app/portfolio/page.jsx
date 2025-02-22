"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


const items = [
  {
    id: 1,
    color: "from-pink-300 to-red-300",
    title: "Pennyworth",
    desc: "An educational personal finance platform",
    img: "/Pennyworth3dMockup.png",
    link: "/portfolio/pennyworth",
  },
  {
    id: 2,
    color: "from-red-300 to-orange-300",
    title: "Bladelink",
    desc: "Designed to make the process of signing up for a barber appointment much more convenient",
    img: "/bladelink3dmockup.png",
    link: "/portfolio/bladelink",
  },
  {
    id: 3,
    color: "from-orange-300 to-yellow-300",
    title: "Techello",
    desc: "A virtual art gallery ",
    img: "/techello3dmockupmobile.png",
    link: "/portfolio/techello",
  },
  {
    id: 4,
    color: "from-yellow-300 to-lime-300",
    title: "Hugo AI",
    desc: "AI-Powered Medical Assistant",
    img: "/HUGO_AI.png",
    link: "https://github.com/sraghuram01/HugoAi",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center lg:text-8xl sm:text-5xl text-center text-white ">
          My Works
        </div>
        
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl" style={{marginTop:"20px"}}>
                    {item.title}
                  </h1>
                  <div className="relative w-50 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Read More</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="min-h-full min-w-screen w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-black text-white">
  <h1 className="lg:text-6xl sm:text-4xl text-white">More projects are in the making</h1>
  <div className="relative">
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      viewBox="0 0 300 300"
      className="w-64 h-64 md:w-[500px] md:h-[500px]"
    >
      <defs>
        <path
          id="circlePath"
          d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
        />
      </defs>
      <text fill="white">
        <textPath xlinkHref="#circlePath" className="text-xl">
          UX Researcher and UI Designer
        </textPath>
      </text>
    </motion.svg>
    <Link href="/contact">
      <button className="w-25 h-25 md:w-20 md:h-20  absolute top-0 left-0 right-0 bottom-0 m-auto bg-white text-black rounded-full flex items-center justify-center">
        Hire Me
      </button>
    </Link>
  </div>
</div>
    </motion.div>
  );
};

export default PortfolioPage;
