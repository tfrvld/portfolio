import EmailIcon from "../assets/svg/email";
import IgSvg from "../assets/svg/ig";
import GithubSvg from "../assets/svg/github";
import WaSvg from "../assets/svg/wa";
import ThreadSvg from "../assets/svg/thread";

function Contact() {
  return (
    <div
      id="contacts"
      className="w-full font-outfit px-[6vw] pb-[3vh] md:pb-[6vh] bg-linear-to-b from-primary to-secondary scroll-mt-10"
    >
      <h1 className="text-white text-center text-[20px] sm:text-[30px] md:text-[38px] lg:text-[43px] pt-[4vh]">
        Contact
      </h1>
      <h2 className="text-white text-center text-[10px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-inter">
        Let's Work Together
      </h2>

      <div className="grid justify-items-center bg-whitebg/10 rounded-[10px] backdrop-blur-md inset-shadow-white/50 inset-shadow-xs w-[80vw] px-[1vw] py-[30px] mx-auto mt-[2vh]">
        <p className="text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-bold">
          TFRVLD
        </p>
        <p className="text-white text-[14px] sm:text-[17px] md:text-[19px] lg:text-[22px]">
          Medan, Sumatera Utara, Indonesia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start gap-x-12 gap-y-5 md:gap-y-7 mt-[2vh] md:mt-[3vh]">
          <a target="_blank" href="mailto:tfrvld@gmail.com">
            <div className="flex justify-start items-center gap-3 md:gap-5">
              <EmailIcon className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px]" />
              <p className="text-white text-[14px] sm:text-[17px] md:text-[20px] lg:text-[23px]">
                tfrvld@gmail.com
              </p>
            </div>
          </a>
          <a target="_blank" href="https://instagram.com/trifahmi_rivaldo">
            <div className="flex justify-start items-center gap-3 md:gap-5">
              <IgSvg className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px]" />
              <p className="text-white text-[14px] sm:text-[17px] md:text-[20px] lg:text-[23px]">
                @trifahmi_rivaldo
              </p>
            </div>
          </a>
          <a target="_blank" href="https://github.com/tfrvld">
            <div className="flex justify-start items-center gap-3 md:gap-5">
              <GithubSvg className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px]" />
              <p className="text-white text-[14px] sm:text-[17px] md:text-[20px] lg:text-[23px]">
                tfrvld
              </p>
            </div>
          </a>
          <a target="_blank" href="https://wa.me/087738568711">
            <div className="flex justify-start items-center gap-3 md:gap-5">
              <WaSvg className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px]" />
              <p className="text-white text-[14px] sm:text-[17px] md:text-[20px] lg:text-[23px]">
                +62 877 3856 8711
              </p>
            </div>
          </a>
          <a target="_blank" href="https://threads.com/trifahmi_rivaldo">
            <div className="flex justify-start items-center gap-3 md:gap-5">
              <ThreadSvg className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px]" />
              <p className="text-white text-[14px] sm:text-[17px] md:text-[20px] lg:text-[23px]">
                @trifahmi_rivaldo
              </p>
            </div>
          </a>
        </div>

        <p className="text-white/60 text-[13px] sm:text-[14px] md:text-[15px] mt-[3vh] md:mt-[4vh]">
          © 2026 Tfrvld. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
export default Contact;
