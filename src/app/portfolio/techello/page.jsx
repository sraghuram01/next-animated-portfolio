import React from 'react';
import Image from 'next/image';
import techelloCompetitiveAudit from '../../../../public/TechelloCompetitiveAudit.png';
import userPersona1 from '../../../../public/TechelloUserPersona1.png';
import userPersona2 from '../../../../public/TechelloUserPersona2.png';
import userFlow from '../../../../public/TechelloUserFlow.png';
import wireframe1 from '../../../../public/TechelloWireframe1.png';
import wireframe2 from '../../../../public/TechelloWireframe2.png';
import wireframe3 from '../../../../public/TechelloWireframe3.png';
import prototype1 from '../../../../public/TechelloPrototype1.png';
import prototype2 from '../../../../public/TechelloPrototype2.png';
import prototype3 from '../../../../public/TechelloPrototype3.png';
import techelloGif from '../../../../public/TechelloMobile.gif';



const TechelloPage = () => {
  const headings = {
    problem: "Problem",
    goal: "Goal",
    research: "Research",
    ideation: "Ideation",
    prototyping: "Prototyping",
    testing: "Testing",
    finalDesign: "Final Design",
    reflection: "Reflection",
  };

  const bodyText = {
    problem: "Artists face limitations in showcasing their work in a manner of their own choosing, leading to a lack of agency in how they present their work. Additionally, art enthusiasts often have limited access to art galleries and exhibitions, making it difficult for them to experience art in a meaningful way.",
    goal: "The objective of Techello is to bridge the gap between galleries, artists, and art-enthusiasts, providing creators with more agency in how they present their work. Art-enthusiasts also get access to both virtual and in-person showcases.",
    research: "This project utilized a combination of traditional and field research methods. Surveys, interviews, and usability studies were conducted to understand the target demographic and the challenges faced by both artists and art enthusiasts. The goal was to improve Techello's app to better address these challenges.",
    ideation: "The ideation phase focused on brainstorming ideas for features, functionalities, and processes that would make Techello a user-friendly and intuitive platform for both artists and art enthusiasts. The goal was to create a virtual art gallery platform that would bridge the gap between galleries and artists, providing creators with more agency in how they present their work, while also providing art enthusiasts with a meaningful and immersive art viewing experience.",
    prototyping: "Three wireframes were created for Techello, each illustrating different aspects of the app's design and functionality. Wireframe 1 focused on the app's homepage, showcasing featured artists and their work. Wireframe 2 focused on the map page, allowing users to locate the nearest art galleries in their area. Wireframe 3 focused on the app's art viewing page, providing users with a sleek and intuitive interface for viewing and interacting with art.",
    testing: "Two rounds of usability studies were conducted to gather feedback on the app's design and functionality. The findings included users looking for a signup option that best caters to their needs and goals. Additionally, users found the art viewing page sleek and intuitive. The second round of testing revealed that users appreciated the explore page for pieces and people based on their tastes, offering more personalization and autonomy. A neutral color scheme was also found to be beneficial for better viewing of the artwork.",
    finalDesign: "The final design of the app included overlooked features from previous phases, while also changing the color scheme to remain neutral and complement the overall design.",
    reflection: "The possibility of providing access to multiple types of content such as videos, audio, and potentially an option for a 360 VR view for any pieces that are much more than just a painting is being explored. Furthermore, research into visual impairment accessibility is being done to address the potential grievances some users might face, such as not being able to view art properly.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-300 to-red-300 text-black px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <h2 className="font-bold text-lg">{headings.problem}</h2>
      <br />
      <p>{bodyText.problem}</p>
      <br />
     
      <div className="flex justify-center">
       
       <Image src={techelloCompetitiveAudit} alt="techello Comp Audit" layout="responsive" width={1872} height={97} />
     </div>
      
      <h2 className="font-bold text-lg">{headings.goal}</h2>
      <br />
      <p>{bodyText.goal}</p>
      <br />
      <br />

      <h2 className="font-bold text-lg">{headings.research}</h2>
      <br />
      <p>{bodyText.research}</p>
      <br />
      <div className="flex flex-col lg:flex-row justify-center lg:gap-20">
        <div className="lg:w-1/2">
          <Image src={userPersona1} alt={`User Persona 1 for Techello`} width={450} height={300} />
        </div>
        <div className="lg:w-1/2">
          <Image src={userPersona2} alt={`User Persona 2 for Techello`} width={450} height={300} />
        </div>
        <br />
      </div>
      <h2 className="font-bold text-lg">{headings.ideation}</h2>
      <br />
      <p>{bodyText.ideation}</p>
      <br />
      <Image src={userFlow} alt="User Flow" width={720} height={480} />

      <br />
      <h2 className="font-bold text-lg">{headings.prototyping}</h2>
      <br />
      <p>{bodyText.prototyping}</p>
      <br />
      <div className="flex justify-center lg:gap-20">
        <Image src={wireframe1} alt={`Wireframe 1 for Techello`} width={130} height={70} />
        <Image src={wireframe2} alt={`Wireframe 2 for Techello`} width={130} height={70} />
        <Image src={wireframe3} alt={`Wireframe 3 for Techello`} width={130} height={70} />
      </div>
      <br />
      <div>
        <h2 className="font-bold text-lg">{headings.testing}</h2>
        <br />
        <p>{bodyText.testing}</p>
        <div className="flex justify-center lg:gap-20">
          <Image src={prototype1} alt={`Prototype 1 for Techello`} width={130} height={70} />
          <Image src={prototype2} alt={`Prototype 2 for Techello`} width={130} height={70} />
          <Image src={prototype3} alt={`Prototype 3 for Techello`} width={130} height={70} />
        </div>
        <br />
      </div>
      <h2 className="font-bold text-lg">{headings.finalDesign}</h2>
      <br />
      <p>{bodyText.finalDesign}</p>
      <div className="flex justify-center">
        <Image src={techelloGif} alt="Techello Gif" width={180} height={120} optimized/>
      </div>
      <br />
      <h2 className="font-bold text-lg">{headings.reflection}</h2>
      <p>{bodyText.reflection}</p>
      <br />
    </div>
  );
};

export default TechelloPage;
