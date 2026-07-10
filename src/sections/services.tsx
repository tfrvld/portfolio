import Web from "../assets/svg/web";
import Uiux from "../assets/svg/uiux";
import Mobile from "../assets/svg/mobile";
function Services() {
  return (
    <div
      id="services"
      className="w-full font-outfit px-[6vw] mb-[2vh] lg:mb-[5vh] scroll-mt-10"
    >
      <h1 className="text-white text-center text-[20px] sm:text-[30px] md:text-[38px] lg:text-[43px] pt-[4vh]">
        Services
      </h1>
      <h2 className="text-white text-center text-[10px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-inter">
        products and services that I can develop and provide
      </h2>
      <div className="grid md:grid-cols-3 justify-items-center mt-5 gap-10">
        <div className=" w-[80vw] sm:w-[60vw] md:w-[25vw] h-[350px] sm:h-[375px] md:h-[420px] lg:h-[480px] bg-whitebg/20 rounded-[14px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs flex flex-col justify-start items-center px-5 pt-8">
          <div className="flex flex-col items-center">
            <div className="flex justify-center h-[35px] sm:h-[50px] md:h-[55px] lg: h-[70px]">
              <p className="text-white text-center text-[20px] sm:text-[30px] md:text-[20px] lg:text-[30px]">
                Web Development
              </p>
            </div>
            <Web className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] lg:mt-10" />
          </div>
          <div className="flex justify-center overflow-scroll h-[150px] sm:h-[200px] md:h-[150px]">
            <p className="text-white text-center text-[14px] md:text-[14px] lg:text-[20px] font-inter w-3/4 mt-8">
              Develop high-performance, scalable web applications.
            </p>
          </div>
        </div>
        <div className=" w-[80vw] sm:w-[60vw] md:w-[25vw] h-[350px] sm:h-[375px] md:h-[420px] lg:h-[480px] bg-whitebg/20 rounded-[14px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs flex flex-col justify-start items-center px-5 pt-8">
          <div className="flex flex-col items-center">
            <div className="flex justify-center h-[35px] sm:h-[50px] md:h-[55px] lg: h-[70px]">
              <p className="text-white text-center text-[20px] sm:text-[30px] md:text-[20px] lg:text-[30px]">
                UI/UX Design
              </p>
            </div>
            <Uiux className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] lg:mt-10" />
          </div>
          <div className="flex justify-center overflow-scroll h-[150px] sm:h-[200px] md:h-[150px]">
            <p className="text-white text-center text-[14px] md:text-[14px] lg:text-[20px] font-inter w-3/4 mt-8">
              Design user-centered interfaces for engaging digital interactions.
            </p>
          </div>
        </div>
        <div className=" w-[80vw] sm:w-[60vw] md:w-[25vw] h-[350px] sm:h-[375px] md:h-[420px] lg:h-[480px] bg-whitebg/20 rounded-[14px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs flex flex-col justify-start items-center px-5 pt-8">
          <div className="flex flex-col items-center">
            <div className="flex justify-center h-[35px] sm:h-[50px] md:h-[55px] lg: h-[70px]">
              <p className="text-white text-center text-[20px] sm:text-[30px] md:text-[20px] lg:text-[30px]">
                Mobile Development
              </p>
            </div>
            <Mobile className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] lg:mt-10" />
          </div>
          <div className="flex justify-center overflow-scroll h-[150px] sm:h-[200px] md:h-[150px]">
            <p className="text-white text-center text-[14px] md:text-[14px] lg:text-[20px] font-inter w-3/4 mt-8">
              Develop smooth, high-performing mobile applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
