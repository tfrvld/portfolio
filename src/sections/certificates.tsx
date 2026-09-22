import c1 from "../assets/sertifikat-aws.png";
import c2 from "../assets/sertifikat-business.png";
import c3 from "../assets/sertifikat-spec-driven.png";
import c4 from "../assets/sertifikat-data-science.png";
import c5 from "../assets/sertifikat-diskominfo.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/floating.css";

function Certificates() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      id="faqs"
      className="w-full font-outfit mb-[2vh] lg:mb-[5vh] scroll-mt-10"
    >
      <h1
        className="text-white text-center text-[20px] sm:text-[30px] md:text-[38px] lg:text-[43px] pt-[4vh]"
        data-aos="fade-left"
      >
        Certificate and License
      </h1>
      <h2
        className="text-white text-center text-[10px] sm:text-[16px] md:text-[20px] lg:text-[20px] font-inter"
        data-aos="fade-right"
      >
        Answer to common question about my work and process
      </h2>
      <div className="bg-linear-to-b from-primary from-0% via-secondary via-50% to-primary">
        <div
          className="flex overflow-x-scroll p-10 gap-5"
          data-aos-delay="250"
          data-aos="fade-left"
        >
          <div className="w-[340px] h-[240px] sm:w-[340px] sm:h-[260px] md:w-[340px] md:h-[260px] lg:w-[450px] lg:h-[360px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs flex justify-center items-center flex-col shrink-0">
            <img
              src={c1}
              alt=""
              className="h-[200px] w-[300px] lg:w-[400px] lg:h-[300px]"
            />
            <p className="text-white mt-1 text-[12px] lg:text-[16px]">
              Dicoding: Belajar Dasar Cloud dan Gen AI di AWS
            </p>
          </div>

          <div className="w-[340px] h-[240px] sm:w-[340px] sm:h-[260px] md:w-[340px] md:h-[260px] lg:w-[450px] lg:h-[360px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs flex justify-center items-center flex-col shrink-0">
            <img
              src={c3}
              alt=""
              className="h-[200px] w-[300px] lg:w-[400px] lg:h-[300px]"
            />
            <p className="text-white mt-1 text-[12px] lg:text-[16px]">
              Dicoding: Spec-Driven Development dengan Kiro
            </p>
          </div>
          <div className="w-[340px] h-[240px] sm:w-[340px] sm:h-[260px] md:w-[340px] md:h-[260px] lg:w-[450px] lg:h-[360px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs flex justify-center items-center flex-col shrink-0">
            <img
              src={c4}
              alt=""
              className="h-[200px] w-[300px] lg:w-[400px] lg:h-[300px]"
            />
            <p className="text-white mt-1 text-[12px] lg:text-[16px]">
              Dicoding: Belajar Penerapan Data Science
            </p>
          </div>
          <div className="w-[340px] h-[240px] sm:w-[340px] sm:h-[260px] md:w-[340px] md:h-[260px] lg:w-[450px] lg:h-[360px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs flex justify-center items-center flex-col shrink-0">
            <img
              src={c2}
              alt=""
              className="h-[200px] w-[300px] lg:w-[400px] lg:h-[300px]"
            />
            <p className="text-white mt-1 text-[12px] lg:text-[16px]">
              Business Plan National Participant
            </p>
          </div>
          <div className="w-[340px] h-[240px] sm:w-[340px] sm:h-[260px] md:w-[340px] md:h-[260px] lg:w-[450px] lg:h-[360px] bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs flex justify-center items-center flex-col shrink-0">
            <img
              src={c5}
              alt=""
              className="h-[200px] w-[300px] lg:w-[400px] lg:h-[300px]"
            />
            <p className="text-white mt-1 text-[12px] lg:text-[16px]">
              Diskominfo Internship Program
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
