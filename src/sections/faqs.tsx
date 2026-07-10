import FaqsCard from "../components/faqscard";

function Faqs() {
  const title1 = "How can we get started";
  const detail1 =
    "We can start by contacting me to discuss and ask about my work";

  const title2 = "Do you take on freelance or full-time work?";
  const detail2 =
    "Yes, I'm open to both. Whether it's a freelance project or a full-time opportunity, I'm happy to discuss how I can contribute.";

  const title3 = "What is your timeline for the project?";
  const detail3 =
    "It really depends on the scope. A simple landing page or portfolio can be done in a week or two, while larger systems with more features may take longer. I'll give you a clear estimate once we discuss the details.";

  const title4 = "What kind of projects do you work on?";
  const detail4 =
    "I work on both web and mobile apps — from portfolios, wedding invitations, and landing pages, to more complex systems like attendance/absence tracking apps. I can handle small projects as well as larger, full-scale systems.";

  const title5 =
    "Can you build an app with AI integration or a complex system?";
  const detail5 =
    "Yes, I've worked with AI integration before and I'm comfortable building complex systems. If your project needs custom logic, APIs, or AI features, I can help design and build that.";

  return (
    <div
      id="faqs"
      className="w-full font-outfit px-[6vw] mb-[2vh] lg:mb-[5vh] scroll-mt-10"
    >
      <h1 className="text-white text-center text-[20px] sm:text-[30px] md:text-[38px] lg:text-[43px] pt-[4vh]">
        Frequently Asked Questions
      </h1>
      <h2 className="text-white text-center text-[10px] sm:text-[16px] md:text-[20px] lg:text-[20px] font-inter">
        Answer to common question about my work and process
      </h2>
      <div className="grid grid-cols-1 justify-items-center mt-[3vh] gap-5">
        <FaqsCard title={title1} detail={detail1} />
        <FaqsCard title={title2} detail={detail2} />
        <FaqsCard title={title3} detail={detail3} />
        <FaqsCard title={title4} detail={detail4} />
        <FaqsCard title={title5} detail={detail5} />
      </div>
    </div>
  );
}

export default Faqs;
