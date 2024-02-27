import Image from 'next/image';
import pennyWorthCompAudit from "../../../../public/PennyworthCompetitiveAudit.png";
import userPersona1 from '../../../../public/PennyworthUserPersona1.png';
import userPersona2 from '../../../../public/PennyworthUserPersona2.png';
import userFlow from '../../../../public/PennyworthUserFlow.png';
import wireframe1 from '../../../../public/PennyworthWireframe1.png';
import wireframe2 from '../../../../public/PennyworthWireframe2.png';
import wireframe3 from '../../../../public/PennyworthWireframe3.png';
import prototype1 from '../../../../public/PennyworthPrototype1.png';
import prototype2 from '../../../../public/PennyworthPrototype2.png';
import prototype3 from '../../../../public/PennyworthPrototype3.png';
import mockup1 from '../../../../public/mockup1.png';
import mockup2 from '../../../../public/mockup2.png';
import mockup3 from '../../../../public/mockup3.png';
import mockup4 from '../../../../public/mockup4.png';
import pennyworthGif from '../../../../public/PennyworthMobile.gif';

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
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #EF745c, #34073D)',
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.problem}</h2>
        <br />
        <p>{bodyText.problem}</p>
        <br />
        <Image src={pennyWorthCompAudit} alt="Pennyworth Comp Audit" width={450} height={600} />
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
          <Image src={userPersona1} alt={`User Persona 1 for Pennyworth`} width={450} height={300} />
          <Image src={userPersona2} alt={`User Persona 2 for Pennyworth`} width={450} height={300} />
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
          <Image src={wireframe1} alt={`Wireframe 1 for Pennyworth`} width={180} height={120} />
          <Image src={wireframe2} alt={`Wireframe 2 for Pennyworth`} width={180} height={120} />
          <Image src={wireframe3} alt={`Wireframe 3 for Pennyworth`} width={180} height={120} />
        </div>
        <br />
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.testingStage1}</h2>
          <br />
          <p>{bodyText.testingStage1}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Image src={prototype1} alt={`Prototype 1 for Pennyworth`} width={180} height={120} />
            <Image src={prototype2} alt={`Prototype 2 for Pennyworth`} width={180} height={120} />
            <Image src={prototype3} alt={`Prototype 3 for Pennyworth`} width={180} height={120} />
          </div>
          <br />
          <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.testingStage2}</h2>
          <br />
          <p>{bodyText.testingStage2}</p>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Image src={mockup1} alt={`Mockup 1 for Pennyworth`} width={180} height={120} />
            <Image src={mockup2} alt={`Mockup 2 for Pennyworth`} width={180} height={120} />
            <Image src={mockup3} alt={`Mockup 3 for Pennyworth`} width={180} height={120} />
            <Image src={mockup4} alt={`Mockup 4 for Pennyworth`} width={180} height={120} />
  
          </div>
          <br />
        </div>
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.finalDesign}</h2>
        <br />
        <p>{bodyText.finalDesign}</p>
        <div>
          <Image src={pennyworthGif} alt="Pennyworth Gif" width={180} height={120} />
        </div>
        <br />
        <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{headings.reflection}</h2>
        <p>{bodyText.reflection}</p>
        <br />
      </div>
    );
  };
  
  export default PennyworthPage;
  