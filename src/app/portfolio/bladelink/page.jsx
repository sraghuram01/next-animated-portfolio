import React from 'react';
import Image from 'next/image';

const BladelinkPage = () => {
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
    problem: "The existing approach to signing up and preparing for an appointment with the barber requires the extensive use of various platforms, making it overwhelming for people to book their barber directly. This often leads to confusion and frustration among users, as they must juggle multiple platforms to achieve a single goal. Additionally, the lack of a centralized platform makes it difficult for users to find reliable information about barbers and their services. This problem is further exacerbated by the inconsistency in information across different platforms which also contributes to the users’ frustrations.",
    goal: "The goal of Bladelink is to simplify and optimize the process of finding and booking a barber or stylist, eliminating the need for users to use multiple platforms for different purposes and ensuring that the information on the platform is accurate and consistent and streamlining the process to make it convenient.",
    research: "User interviews and market research were conducted across multiple platforms that serve this purpose. The research showed that the target audience faced the inconvenience of using multiple platforms for different purposes, only to get unsatisfactory results. The information on these platforms didn't correspond, making the process of connecting with a barber more challenging. Based on this research, the team identified the need for a platform that consolidates various features and streamlines the process for choosing a style, choosing a barber in your area, and signing up for an appointment.",
    ideation: "The goal was to create a simple yet intuitive interface that not only consolidated various features but also optimized the process for choosing a style, choosing a barber in your area, and signing up for an appointment. After brainstorming for ideas, it was decided that a mobile design approach would be the best method of implementation due to the high percentage of users who preferred to have a mobile platform.  Below is a user journey map depicting how a user would navigate the app.",
    prototyping: "Below are 3 wireframes that served as an essential tool in designing the structure of the app",
    testing: "User testing sessions were conducted to gather feedback on the initial prototype. Additionally, a user who is a stylist mentioned that the platform's appointment process made it easier for them to manage their appointments and connect with customers. A streamlined approach from choosing a hairstyle to checking in was shown to be considerably more efficient. The gradient theme and contrasting color of the iconography received positive feedback since it enhanced the visibility of the interface which helped in the accessibility of different parts in the platform with ease. ",
    finalDesign: "The goal for the final prototype was to utilize the feedback we got from our testing phase and expand upon it in the app. One such thing we expanded on was the color scheme to further enhance visibility while keeping the same theme which the user's preferred.",
    reflection: "Currently, the possibility of adding a direct message feature to provide users with better outreach is being explored. The product’s services are being explored to expand beyond barbers to other cosmetic services. Implementing payment systems using platforms like Venmo, Zelle, and CashApp is also under consideration to push for an even more streamlined approach to the sign-up process. Additionally a web-platform is currently being designed to serve as a flexible way for both mobile and desktop users to use Bladelink and its features."
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <br></br>
      <h2 className="font-bold text-lg">{headings.problem}</h2>
      <br />
      <p>{bodyText.problem}</p>
      <br />
      <div className="flex justify-center">
        <Image
          src="/BladelinkCompetitiveAudit.png"
          alt="Bladelink Comp Audit"
          layout="responsive"
          width={1821}
          height={215}
        />
      </div>
      <br />
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
          <Image src="/BladelinkUserPersona1.png" alt={`User Persona 1 for Bladelink`} width={450} height={300} />
        </div>
        <br />
        <div className="lg:w-1/2">
          <Image src="/BladelinkUserPersona2.png" alt={`User Persona 2 for Bladelink`} width={450} height={300} />
        </div>
        <br />
      </div>
      <h2 className="font-bold text-lg">{headings.ideation}</h2>
      <br />
      <p>{bodyText.ideation}</p>
      <br />
      <div className="flex justify-center">
        <Image src="/BladelinkUserFlow.png" alt="User Flow" width={720} height={480} />
      </div>
      <br />
      <h2 className="font-bold text-lg">{headings.prototyping}</h2>
      <br />
      <p>{bodyText.prototyping}</p>
      <br />
      <div className="flex justify-center lg:gap-20">
        <Image src="/BladelinkWireframe1.png" alt={`Wireframe 1 for Bladelink`} width={140} height={80} />
        <Image src="/BladelinkWireframe2.png" alt={`Wireframe 2 for Bladelink`} width={140} height={80} />
        <Image src="/BladelinkWireframe3.png" alt={`Wireframe 3 for Bladelink`} width={140} height={80} />
      </div>
      <br />
      <div>
        <h2 className="font-bold text-lg">{headings.testing}</h2>
        <br />
        <p>{bodyText.testing}</p>
        <div className="flex justify-center lg:gap-20">
          <Image src="/BladelinkPrototype1.png" alt={`Prototype 1 for Bladelink`} width={140} height={80} />
          <Image src="/BladelinkPrototype2.png" alt={`Prototype 2 for Bladelink`} width={140} height={80} />
          <Image src="/BladelinkPrototype3.png" alt={`Prototype 3 for Bladelink`} width={140} height={80} />
        </div>
        <br />
      </div>
      <h2 className="font-bold text-lg">{headings.finalDesign}</h2>
      <br />
      <p>{bodyText.finalDesign}</p>
      <div className="flex justify-center">
        <Image src="/BladelinkMobile.gif" alt="Bladelink Gif" width={180} height={120} optimized />
      </div>
      <br />
      <h2 className="font-bold text-lg">{headings.reflection}</h2>
      <p>{bodyText.reflection}</p>
      <br />
    </div>
  );
};

export default BladelinkPage;
