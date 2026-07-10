import { useState } from "react";
import CaretDown from "../assets/svg/caret-down";

interface FaqsCardProps {
  title: string;
  detail: string;
}

export default function FaqsCard({ title, detail }: FaqsCardProps) {
  const [drop, setDrop] = useState(false);

  return (
    <div className="bg-secondary py-4 px-6 rounded-[15px] w-[75vw] border-2 border-black">
      <div
        className="flex justify-between items-center cursor-pointer gap-5"
        onClick={() => setDrop(!drop)}
      >
        <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
          {title}
        </p>
        <CaretDown
          className={`w-[20px] h-[20px] transition-transform duration-300 shrink-0 ${
            drop ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          drop ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <p className="text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
          {detail}
        </p>
      </div>
    </div>
  );
}
