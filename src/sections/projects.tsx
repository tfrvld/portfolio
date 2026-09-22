import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";
import p4 from "../assets/project4.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/floating.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      id="projects"
      className="w-full font-outfit px-[6vw] mb-[2vh] lg:mb-[5vh] scroll-mt-10"
    >
      <h1
        className="text-white text-center text-[20px] sm:text-[30px] md:text-[38px] lg:text-[43px] pt-[4vh]"
        data-aos="fade-left"
      >
        Recent Projects
      </h1>
      <h2
        className="text-white text-center text-[10px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-inter"
        data-aos="fade-right"
      >
        This is a project I have worked on to the best of my ability, and I hope
        its quality continues to improve
      </h2>
      <div className="grid md:grid-cols-2 justify-items-center mt-5 gap-10">
        <div className="grid grid-cols-1 justify-items-center gap-3">
          <div
            className="w-[320px] h-[190px] sm:w-[360px] sm:h-[215px] md:w-[340px] md:h-[200px] lg:w-[380px] lg:h-[220px] overflow-hidden rounded-xl"
            data-aos="fade-up"
          >
            <img
              src={p1}
              alt="Trifahmi Rivaldo"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="w-[340px] h-[120px] sm:w-[400px] sm:h-[160px] md:w-[410px] md:h-[160px] lg:w-[450px] lg:h-[160px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs"
            data-aos-delay="200"
            data-aos="fade-up"
          >
            <div className="w-fit bg-black/10 rounded-[10px] border-white/50 border mt-3 ml-3 px-[6px] py-[2px] text-white text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
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
          <div
            className="w-[320px] h-[190px] sm:w-[360px] sm:h-[215px] md:w-[340px] md:h-[200px] lg:w-[380px] lg:h-[220px] overflow-hidden rounded-xl"
            data-aos-delay="400"
            data-aos="fade-up"
          >
            <img
              src={p2}
              alt="Trifahmi Rivaldo"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="w-[340px] h-[120px] sm:w-[400px] sm:h-[160px] md:w-[410px] md:h-[160px] lg:w-[450px] lg:h-[160px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs"
            data-aos-delay="600"
            data-aos="fade-up"
          >
            <div className="w-fit bg-black/10 rounded-[10px] border-white/50 border mt-3 ml-3 px-[6px] py-[2px] text-white text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Server Inventory
            </div>
            <p className="text-white px-3 text-[16px] sm:text-[18px] md:text-[20px]">
              Internship project at Diskominfo Sumut
            </p>
            <p className="text-white px-3 text-[10px] sm:text-[14px]">
              Create CRUD sistem to handle server inventory data, make data
              handling become more efficient and effective
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-3">
          <div
            className="w-[320px] h-[190px] sm:w-[360px] sm:h-[215px] md:w-[340px] md:h-[200px] lg:w-[380px] lg:h-[220px] overflow-hidden rounded-xl"
            data-aos-delay="800"
            data-aos="fade-up"
          >
            <img
              src={p3}
              alt="Trifahmi Rivaldo"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="w-[340px] h-[120px] sm:w-[400px] sm:h-[160px] md:w-[410px] md:h-[160px] lg:w-[450px] lg:h-[160px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs"
            data-aos-delay="1000"
            data-aos="fade-up"
          >
            <div className="w-fit bg-black/10 rounded-[10px] border-white/50 border mt-3 ml-3 px-[6px] py-[2px] text-white text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              Attendance App
            </div>
            <p className="text-white px-3 text-[16px] sm:text-[18px] md:text-[20px]">
              Village Head's Office Attendance Register
            </p>
            <p className="text-white px-3 text-[10px] sm:text-[14px]">
              Implementing a digital attendance system for the village head's
              office to improve efficiency
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-3">
          <div
            className="w-[320px] h-[190px] sm:w-[360px] sm:h-[215px] md:w-[340px] md:h-[200px] lg:w-[380px] lg:h-[220px] overflow-hidden rounded-xl"
            data-aos-delay="1200"
            data-aos="fade-up"
          >
            <img
              src={p4}
              alt="Trifahmi Rivaldo"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="w-[340px] h-[120px] sm:w-[400px] sm:h-[160px] md:w-[410px] md:h-[160px] lg:w-[450px] lg:h-[160px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs"
            data-aos-delay="1400"
            data-aos="fade-up"
          >
            <div className="w-fit bg-black/10 rounded-[10px] border-white/50 border mt-3 ml-3 px-[6px] py-[2px] text-white text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
              CineGO
            </div>
            <p className="text-white px-3 text-[16px] sm:text-[18px] md:text-[20px]">
              Cinema ticket booking app
            </p>
            <p className="text-white px-3 text-[10px] sm:text-[14px]">
              Implemented a digital cinema ticket booking system using a website
              as the booking platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
