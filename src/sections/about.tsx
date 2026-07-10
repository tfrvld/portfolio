import pp from "../assets/profile_pic.png";
import GithubSvg from "../assets/svg/github";
import IgSvg from "../assets/svg/ig";
import ThreadSvg from "../assets/svg/thread";
import WaSvg from "../assets/svg/wa";

import ExpoSvg from "../assets/svg/expo";
import FigmaSvg from "../assets/svg/figma";
import FlutterSvg from "../assets/svg/flutter";
import LaravelSvg from "../assets/svg/laravel";
import ReactSvg from "../assets/svg/react";
import NodejsSvg from "../assets/svg/nodejs";
import TailwindSvg from "../assets/svg/tailwind";

function About() {
  return (
    <div
      id="about"
      className="w-full font-outfit px-[6vw] mb-[2vh] md:mb-[5vh] scroll-mt-10"
    >
      <h1 className="text-white text-center text-[20px] sm:text-[30px] md:text-[38px] lg:text-[43px] pt-[4vh]">
        About Me
      </h1>
      <h2 className="text-white text-center text-[10px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-inter">
        I love building websites and mobile apps, and designing high-quality,
        high-performance UI/UX
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-[5vh] gap-5 w-full max-w-[1200px] mx-auto">
          <div className="col-span-1 bg-[#d9d9d9]/5 backdrop-blur-md inset-shadow-white/50 inset-shadow-xs px-4 sm:px-6 rounded-[10px] md:rounded-[15px] lg:rounded-[20px] w-full flex flex-col items-center py-[3vh] justify-between">
            <div className="flex flex-col items-center">
              <img
                src={pp}
                alt="Trifahmi Rivaldo"
                className="object-contain w-full max-w-[270px] sm:max-w-[350px] md:max-w-[270px] rounded-[6px] md:rounded-[8px] lg:rounded-[12px]"
              />
              <div className="bg-[#d9d9d9]/5 backdrop-blur-md inset-shadow-white/50 inset-shadow-xs px-[8px] sm:px-[12px] py-[3px] text-white mt-[2vh] sm:mt-[2vh] md:mt-[3vh] flex items-center gap-2 w-fit rounded-[1000px] text-[14px] md:text-[13px] lg:text-[20px]">
                <div className="w-[4px] h-[4px] sm:w-[7px] sm:h-[7px] md:w-[6px] md:h-[6px] lg:w-2 lg:h-2 rounded-full bg-green-400 flex-shrink-0" />
                Available for work
              </div>
              <p className="text-white text-[20px] md:text-[16px] lg:text-[24px] mt-3 text-center font-semibold tracking-wide">
                TRIFAHMI RIVALDO
              </p>
              <p className="text-white text-[16px] md:text-[14px] lg:text-[16px] text-center font-inter mt-1">
                UI/UX Designer & Full-Stack Developer.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-3 md:gap-4 lg:gap-5 mt-[4vh]">
                <a href="">
                  <IgSvg className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px]" />
                </a>
                <a href="">
                  <GithubSvg className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px]" />
                </a>
                <a href="">
                  <WaSvg className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px]" />
                </a>
                <a href="">
                  <ThreadSvg className="w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px]" />
                </a>
              </div>
              <a href="" className="mt-[4vh] mb-2">
                <div className="bg-linear-to-r from-third to-secondary text-white text-[14px] md:text-[12px] lg:text-[16px] px-4 sm:px-8 py-[4px] sm:py-[8px] md:px-[8px] rounded-full hover:from-secondary hover:to-third transition delay-100 duration-[500ms] inset-shadow-white/50 inset-shadow-xs whitespace-nowrap">
                  LET'S CONNECT
                </div>
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col gap-5">
            <div className="bg-[#d9d9d9]/5 backdrop-blur-md inset-shadow-white/50 inset-shadow-xs rounded-[10px] md:rounded-[15px] lg:rounded-[20px] px-[2vw] py-[3vh]">
              <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]">
                Hi I'm Trifahmi Rivaldo
              </p>
              <p className="text-white mt-[2vh] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[18px] font-inter">
                I am a developer passionate about building digital products that
                deliver an amazing user experience. I am committed to clean
                code, user-friendly interfaces, and designs that provide
                solutions. I can help turn ideas and creativity into products
                that offer a seamless user experience.
              </p>
              <p className="text-white mt-[2vh] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[18px] font-inter">
                I specialize in website development, app development, and UI/UX
                design. With my skills, I guarantee that my work will deliver
                both functional and visually satisfying results
              </p>
            </div>
            <div className="bg-[#d9d9d9]/5 backdrop-blur-md inset-shadow-white/50 inset-shadow-xs rounded-[10px] md:rounded-[15px] lg:rounded-[20px] px-[2vw] py-[2vh]">
              <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]">
                Tech Stack
              </p>
              <div className="flex mt-[2vh] items-center justify-between">
                <LaravelSvg className="w-[45px] h-[45px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px]" />
                <ReactSvg className="w-[45px] h-[45px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px]" />
                <ExpoSvg className="w-[45px] h-[45px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px]" />
                <FigmaSvg className="w-[45px] h-[45px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px]" />
                <TailwindSvg className="w-[45px] h-[45px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px]" />
                <FlutterSvg className="w-[45px] h-[45px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px]" />
                <NodejsSvg className="w-[45px] h-[45px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px]" />
              </div>
            </div>
            <div className="bg-[#d9d9d9]/5 backdrop-blur-md inset-shadow-white/50 inset-shadow-xs rounded-[10px] md:rounded-[15px] lg:rounded-[20px] px-[2vw] py-[1vh]">
              <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]">
                Expertise
              </p>
              <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs text-white my-3">
                <table className="w-full text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-left rtl:text-right text-body">
                  <tbody>
                    <tr className="bg-neutral-primary border-b border-default">
                      <th
                        scope="row"
                        className="px-6 py-1 sm:py-3 md:py-2 lg:py-4 font-medium text-heading whitespace-nowrap"
                      >
                        Web Development
                      </th>
                      <td className="px-6 py-1 sm:py-3 md:py-2 lg:py-4">
                        Self-Taught and University
                      </td>
                      <td className="px-6 py-1 sm:py-3 md:py-2 lg:py-4">
                        2020 - Now
                      </td>
                    </tr>
                    <tr className="bg-neutral-primary border-b border-default">
                      <th
                        scope="row"
                        className="px-6 py-1 sm:py-3 md:py-2 lg:py-4 font-medium text-heading whitespace-nowrap"
                      >
                        UI/UX Design
                      </th>
                      <td className="px-6 py-1 sm:py-3 md:py-2 lg:py-4">
                        Self-Taught
                      </td>
                      <td className="px-6 py-1 sm:py-3 md:py-2 lg:py-4">
                        2023 - Now
                      </td>
                    </tr>
                    <tr className="bg-neutral-primary border-b border-default">
                      <th
                        scope="row"
                        className="px-6 py-1 sm:py-3 md:py-2 lg:py-4 font-medium text-heading whitespace-nowrap"
                      >
                        Mobile App Development
                      </th>
                      <td className="px-6 py-1 sm:py-3 md:py-2 lg:py-4">
                        Self-Taught and University
                      </td>
                      <td className="px-6 py-1 sm:py-3 md:py-2 lg:py-4">
                        2024 - Now
                      </td>
                    </tr>
                    <tr className="bg-neutral-primary border-b border-default">
                      <th
                        scope="row"
                        className="px-6 py-1 sm:py-3 md:py-2 lg:py-4 font-medium text-heading whitespace-nowrap"
                      >
                        Data Analyst
                      </th>
                      <td className="px-6 py-1 sm:py-3 md:py-2 lg:py-4">
                        Self-Taught and University
                      </td>
                      <td className="px-6 py-1 sm:py-3 md:py-2 lg:py-4">
                        2025 - Now
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
