import React from 'react';
import Image from 'next/image';
import bladelinkCompetitiveAudit from "../../../../public/BladelinkCompetitiveAudit.png";
import userPersona1 from '../../../../public/BladelinkUserPersona1.png';
import userPersona2 from '../../../../public/BladelinkUserPersona2.png';
import userFlow from '../../../../public/BladelinkUserFlow.png';
import wireframe1 from '../../../../public/BladelinkWireframe1.png';
import wireframe2 from '../../../../public/BladelinkWireframe2.png';
import wireframe3 from '../../../../public/BladelinkWireframe3.png';
import prototype1 from '../../../../public/BladelinkPrototype1.png';
import prototype2 from '../../../../public/BladelinkPrototype2.png';
import prototype3 from '../../../../public/BladelinkPrototype3.png';
import bladelinkGif from '../../../../public/BladelinkMobile.gif';

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
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #c621e5, #7d7cf9)',
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.problem}</h2>
        <br />
        <p>{bodyText.problem}</p>
        <br />
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.goal}</h2>
        <br />
        <p>{bodyText.goal}</p>
        <br />
        <br />
  
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.research}</h2>
        <br />
        <p>{bodyText.research}</p>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Image src={userPersona1} alt={`User Persona 1 for Bladelink`} width={450} height={300} />
          <Image src={userPersona2} alt={`User Persona 2 for Bladelink`} width={450} height={300} />
          <br></br>
        </div>
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.ideation}</h2>
        <br />
        <p>{bodyText.ideation}</p>
        <br />
        <Image src={userFlow} alt="User Flow" width={720} height={480} />
  
  
  
        <br />
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.prototyping}</h2>
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Image src={wireframe1} alt={`Wireframe 1 for Bladelink`} width={180} height={120} />
          <Image src={wireframe2} alt={`Wireframe 2 for Bladelink`} width={180} height={120} />
          <Image src={wireframe3} alt={`Wireframe 3 for Bladelink`} width={180} height={120} />
        </div>
        <br />
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.testing}</h2>
          <br />
          <p>{bodyText.testing}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Image src={prototype1} alt={`Prototype 1 for Bladelink`} width={180} height={120} />
            <Image src={prototype2} alt={`Prototype 2 for Bladelink`} width={180} height={120} />
            <Image src={prototype3} alt={`Prototype 3 for Bladelink`} width={180} height={120} />
          </div>
          <br />
        </div>
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.finalDesign}</h2>
        <br />
        <p>{bodyText.finalDesign}</p>
        <div>
          <Image src={bladelinkGif} alt="Bladelink Gif" width={180} height={120} />
        </div>
        <br />
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.reflection}</h2>
        <p>{bodyText.reflection}</p>
        <br />
      </div>
    );
  };
  
  export default BladelinkPage;