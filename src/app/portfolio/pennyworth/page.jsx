import React from 'react';
import Image from 'next/image';


const PennyworthPage = () => {
  const headings = {
    problem: "Problem",
    goal: "Goal",
    research: "Research",
    ideation: "Ideation",
    prototyping: "Prototyping",
    testingStage1: "Testing Stage 1",
    testingStage2: "Testing Stage 2",
    finalDesign: "Final Design",
    reflection: "Reflection",
  };

  const bodyText = {
    problem: "Current personal finance platforms often lack user-friendliness, especially for young people and those without formal financial education. They often present complex financial concepts in a confusing manner, which can be overwhelming.",
    goal: "The goal of the Pennyworth platform is to make the complicated world of personal finance and budgeting simpler. By offering a user-friendly platform, it tackles the challenges people face when learning about personal finance. Many of the current systems fall short of providing consumers with an easy-to-use means of learning about personal finance, particularly young people, and those without formal knowledge. These platforms frequently convey intricate financial ideas in a confusing way, which can be overwhelming for the user. Pennyworth is designed to be both user-friendly and robust, ensuring that the user can learn about the intricacies of managing their personal finance as well as use additional features such as transferring money and managing their portfolio.",
    research: "Surveys, interviews, and user personas were used to understand a variety of pain points and preferences of users across a broad demographic. Additionally, a competitive analysis was done to analyze the strengths and shortcomings of platforms that already exist, and this helped tailor the app to meet the specific needs of each user group. From our qualitative analysis, it was found that approximately 43% of users get professional assistance managing their finances. Another key finding from our research was that many users across demographics like to use visual representations such as charts and graphs to manage their finances. When asked about what type of graph they preferred, many of the users surveyed reported they liked to use Pie Charts.",
    ideation: "The approach to ideating Pennyworth was focused on creating a user-friendly and intuitive app that addresses the specific needs of the users. Ideas for features and functionalities were brainstormed to make managing finances easier for users from all backgrounds. It was decided that the best approach would be to go for a mobile design approach due to 90% of users who were interviewed had reported that they manage their everyday finances via their phone.",
    prototyping: "Below are 3 wireframes of Pennyworth. When designing the architecture of Pennyworth, the primary objective was to have a clear and intuitve structure for better ease of navigation. The features were organized into 5 main categories; Accounts, Transfers, Budgeting, Stock portfolio, and the AI-assistant. Using a consistent layout was essential for the next phases of our design process due to  it's robust structure.",
    testingStage1: "An initial prototype was created based on the designs from the ideation phase. This prototype included a color scheme that some users found hard to see. It was also noted that a significant portion of the users felt that the transitions were clunky and affected the way they navigated through the app.",
    testingStage2: "After doing an overhaul of the previous iteration’s theme and transitions. A second prototype was pushed out for the testing phase that was designed on the feedback from our first round of testing as well as some key aspects that were previously impossible to add in were now able to be implemented. User testing sessions were conducted with users to gather feedback on the initial prototype. During these sessions, we saw a positive response to the redesign. Based on this valuable feedback, adjustments were made to enhance the design and functionality of Pennyworth, ensuring a more user-friendly and intuitive experience.",
    finalDesign: "The final design of Pennyworth incorporated a new color palette, improved transitions, and an enhanced user experience based on feedback from testing.",
    reflection: "Currently a website version of Pennyworth is under development This will include the same features of the mobile platform but with additional features. Additional research about the aspects of stock trading is being conducted to figure out an effective method to make it educational for a beginner user. This will include educational resources and tools to help users learn about investing and stock trading in a safe and informative way",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-300 to-red-300 text-black px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <br></br>
      <h2 className="font-bold text-lg">{headings.problem}</h2>
      <br />
      <p>{bodyText.problem}</p>
      <br />
      <div className="flex justify-center">
        <Image src="/PennyworthCompetitiveAudit.png" alt="Pennyworth Comp Audit" layout="responsive" width={1872} height={97} />
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
          <Image src="/PennyworthUserPersona1.png" alt={`User Persona 1 for Pennyworth`} width={450} height={300} />
        </div>
        <br />
        <div className="lg:w-1/2">
          <Image src="/PennyworthUserPersona2.png" alt={`User Persona 2 for Pennyworth`} width={450} height={300} />
        </div>
        <br />
      </div>
      <h2 className="font-bold text-lg">{headings.ideation}</h2>
      <br />
      <p>{bodyText.ideation}</p>
      <br />
      <div className="flex justify-center">
        <Image src="/PennyworthUserFlow.png" alt="User Flow" width={720} height={480} />
      </div>

      <br />
      <h2 className="font-bold text-lg">{headings.prototyping}</h2>
      <br />
      <p>{bodyText.prototyping}</p>
      <br />
      <div className="flex justify-center lg:gap-20">
        <Image src="/PennyworthWireframe1.png" alt={`Wireframe 1 for Pennyworth`} width={140} height={80} />
        <Image src="/PennyworthWireframe2.png" alt={`Wireframe 2 for Pennyworth`} width={140} height={80} />
        <Image src="/PennyworthWireframe3.png" alt={`Wireframe 3 for Pennyworth`} width={140} height={80} />
      </div>
      <br />
      <div>
        <h2 className="font-bold text-lg">{headings.testingStage1}</h2>
        <br />
        <p>{bodyText.testingStage1}</p>
        <div className="flex justify-center lg:gap-20">
          <Image src="/PennyworthPrototype1.png" alt={`Prototype 1 for Pennyworth`} width={140} height={80} />
          <Image src="/PennyworthPrototype2.png" alt={`Prototype 2 for Pennyworth`} width={140} height={80} />
          <Image src="/PennyworthPrototype3.png" alt={`Prototype 3 for Pennyworth`} width={140} height={80} />
        </div>
        <br />
        <h2 className="font-bold text-lg">{headings.testingStage2}</h2>
        <br />
        <p>{bodyText.testingStage2}</p>
        <br />
        <div className="flex justify-center lg:gap-20">
          <Image src="/mockup2.png" alt={`Mockup 2 for Pennyworth`} width={140} height={80} />
          <Image src="/mockup3.png" alt={`Mockup 3 for Pennyworth`} width={140} height={80} />
          <Image src="/mockup4.png" alt={`Mockup 4 for Pennyworth`} width={140} height={80} />
        </div>
        <br />
      </div>
      <h2 className="font-bold text-lg">{headings.finalDesign}</h2>
      <br />
      <p>{bodyText.finalDesign}</p>
      <br></br>
      <br></br>
      <div className="flex justify-center">
        <Image src="/PennyworthMobile.gif" alt="Pennyworth Gif" width={180} height={120} optimized />
      </div>
      <br />
      <h2 className="font-bold text-lg">{headings.reflection}</h2>
      <p>{bodyText.reflection}</p>
      <br />
      
    </div>
  );
};


export default PennyworthPage;
