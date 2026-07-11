import Navbar from "../components/navbar";
import Herosvg from "../assets/svg/hero_icon.tsx";

function Hero() {
  return (
    <>
      <div
        id="hero"
        className="font-outfit min-h-full md:min-h-screen mb-[2vh] lg:mb-[5vh] scroll-mt-10"
      >
        <div className="flex items-center justify-center pt-6 md:pt-10">
          <Navbar></Navbar>
        </div>
        <div className="px-6 md:px-[6vw] mt-[8vh] md:mt-[10vh] flex flex-col gap-8 md:gap-0">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-outfit text-lg sm:text-[25px] md:text-[30px] lg:text-[40px] text-white text-center md:text-left">
              Hello, Im{" "}
              <span className="text-fourth font-bold">Trifahmi Rivaldo</span>
            </p>
            <p className="font-outfit text-2xl sm:text-[30px] md:text-[40px] lg:text-[50px] text-fourth mt-3 md:mt-1 font-bold text-center md:text-left">
              WEB AND MOBILE DEVELOPER
            </p>
          </div>
          {/* SVG di mobile: full width, ruang lega */}
          <div className="w-full flex justify-center md:hidden my-[2.5vh]">
            <Herosvg className="w-[220px] h-[220px]" />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="font-outfit text-sm sm:text-[20px] md:text-[25px] lg:text-[30px] text-white">
                UI/UX DESIGNER
              </p>
              <p className="font-outfit text-base sm:text-[25px] md:text-[30px] lg:text-[40px] text-white mt-4 md:mt-10 font-bold leading-relaxed md:leading-snug">
                Curious Developer Passionate About Building Things That Live on
                the Internet
              </p>
              <div className="flex justify-center md:justify-start items-center mt-5 md:mt-15 lg:mt-20 gap-4 md:gap-8">
                <a href="#projects" className="w-auto">
                  <div className="text-white text-sm sm:text-[15px] md:text-[19px] lg:text-[23px] px-5 py-3 md:py-1 bg-third rounded-[5px] text-center">
                    See My Work
                  </div>
                </a>
                <a href="CV_Trifahmi_Rivaldo.pdf" download className="w-auto">
                  <div className="text-white text-sm sm:text-[15px] md:text-[19px] lg:text-[23px] px-5 py-3 md:py-1 bg-third rounded-[5px] text-center">
                    Download CV
                  </div>
                </a>
              </div>
            </div>
            {/* SVG di desktop tetap seperti semula */}
            <div className="hidden md:flex w-1/2 justify-center">
              <div className="md:mt-[3vh] lg:mt-[0] md:ml-[25vh]">
                <Herosvg className="md:w-[200px] md:h-[200px] lg:w-[350px] lg:h-[350px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
