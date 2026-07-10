import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";

function Projects() {
  return (
    <div
      id="projects"
      className="w-full font-outfit px-[6vw] mb-[2vh] lg:mb-[5vh] scroll-mt-10"
    >
      <h1 className="text-white text-center text-[20px] sm:text-[30px] md:text-[38px] lg:text-[43px] pt-[4vh]">
        Recent Projects
      </h1>
      <h2 className="text-white text-center text-[10px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-inter">
        This is a project I have worked on to the best of my ability, and I hope
        its quality continues to improve
      </h2>
      <div className="grid md:grid-cols-2 justify-items-center mt-5 gap-10">
        <div className="grid grid-cols-1 justify-items-center gap-3">
          <img
            src={p1}
            alt="Trifahmi Rivaldo"
            className="object-contain w-full max-w-[250px] sm:max-w-[330px] md:max-w-[340px] lg:max-w-[380px] rounded-[6px] md:rounded-[8px] lg:rounded-[12px]"
          />
          <div className="w-[340px] h-[120px] sm:w-[400px] sm:h-[160px] md:w-[410px] md:h-[160px] lg:w-[450px] lg:h-[160px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs">
            <div className="w-fit bg-black/10 rounded-[10px] border-white/50 border-1 mt-3 ml-3 px-[6px] py-[2px] text-white text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Sentry
            </div>
            <p className="text-white px-3 text-[16px] sm:text-[18px] md:text-[20px]">
              Fraudulent SMS filtering app
            </p>
            <p className="text-white px-3 text-[10px] sm:text-[14px]">
              An app that monitors your inbox and automatically filters
              messages, classifying them as fraudulent, suspicious or safe using
              an AI deep learning system
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-3">
          <img
            src={p2}
            alt="Trifahmi Rivaldo"
            className="object-contain w-full max-w-[250px] sm:max-w-[330px] md:max-w-[340px] lg:max-w-[380px] rounded-[6px] md:rounded-[8px] lg:rounded-[12px]"
          />
          <div className="w-[340px] h-[120px] sm:w-[400px] sm:h-[160px] md:w-[410px] md:h-[160px] lg:w-[450px] lg:h-[160px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs">
            <div className="w-fit bg-black/10 rounded-[10px] border-white/50 border-1 mt-3 ml-3 px-[6px] py-[2px] text-white text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Wedding Invitation
            </div>
            <p className="text-white px-3 text-[16px] sm:text-[18px] md:text-[20px]">
              integrate wedding invitation into digital
            </p>
            <p className="text-white px-3 text-[10px] sm:text-[14px]">
              Create digital wedding invitations with an attractive and
              appealing design
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-3">
          <img
            src={p1}
            alt="Trifahmi Rivaldo"
            className="object-contain w-full max-w-[250px] sm:max-w-[330px] md:max-w-[340px] lg:max-w-[380px] rounded-[6px] md:rounded-[8px] lg:rounded-[12px]"
          />
          <div className="w-[340px] h-[120px] sm:w-[400px] sm:h-[160px] md:w-[410px] md:h-[160px] lg:w-[450px] lg:h-[160px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs">
            <div className="w-fit bg-black/10 rounded-[10px] border-white/50 border-1 mt-3 ml-3 px-[6px] py-[2px] text-white text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Sentry
            </div>
            <p className="text-white px-3 text-[16px] sm:text-[18px] md:text-[20px]">
              Fraudulent SMS filtering app
            </p>
            <p className="text-white px-3 text-[10px] sm:text-[14px]">
              An app that monitors your inbox and automatically filters
              messages, classifying them as fraudulent, suspicious or safe using
              an AI deep learning system
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-3">
          <img
            src={p2}
            alt="Trifahmi Rivaldo"
            className="object-contain w-full max-w-[250px] sm:max-w-[330px] md:max-w-[340px] lg:max-w-[380px] rounded-[6px] md:rounded-[8px] lg:rounded-[12px]"
          />
          <div className="w-[340px] h-[120px] sm:w-[400px] sm:h-[160px] md:w-[410px] md:h-[160px] lg:w-[450px] lg:h-[160px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs">
            <div className="w-fit bg-black/10 rounded-[10px] border-white/50 border-1 mt-3 ml-3 px-[6px] py-[2px] text-white text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Wedding Invitation
            </div>
            <p className="text-white px-3 text-[16px] sm:text-[18px] md:text-[20px]">
              integrate wedding invitation into digital
            </p>
            <p className="text-white px-3 text-[10px] sm:text-[14px]">
              Create digital wedding invitations with an attractive and
              appealing design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
