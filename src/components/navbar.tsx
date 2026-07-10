import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { label: "HOME", href: "#hero", id: "hero" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "PROJECT", href: "#projects", id: "projects" },
    { label: "FAQs", href: "#faqs", id: "faqs" },
    { label: "CONTACT", href: "#contacts", id: "contacts" },
  ];

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveSection(id); // instant feedback, don't wait for scroll
    setIsOpen(false);
  };

  return (
    <>
      {/* ===== DESKTOP VERSION ===== */}
      <div className="hidden md:flex w-3/5 h-[7vh] rounded-[26px] bg-whitebg/25 backdrop-blur-md inset-shadow-white/50 inset-shadow-xs justify-between items-center px-8 fixed z-50">
        <div className="flex items-center">
          <a
            href=""
            className="font-outfit text-[17px] sm:text-[20px] md:text-[25px] lg:text-[30px] text-fourth"
          >
            TFRVLD
          </a>
          <div className="w-[1.5px] h-[5vh] bg-white ml-2"></div>
        </div>

        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => handleLinkClick(item.id)}
            className={`font-outfit text-[10px] sm:text-[12px] md:text-[15px] lg:text-[20px] transition duration-200 ${
              activeSection === item.id
                ? "text-fourth underline"
                : "text-white hover:text-fourth hover:underline"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* ===== MOBILE VERSION ===== */}
      <div className="md:hidden fixed z-50 w-[90%] left-1/2 -translate-x-1/2 top-4">
        <div className="w-full h-[7vh] rounded-[26px] bg-whitebg/25 backdrop-blur-md inset-shadow-white/50 inset-shadow-xs flex justify-between items-center px-6">
          <div className="flex items-center">
            <a
              href=""
              className="font-outfit text-[17px] sm:text-[20px] text-fourth"
            >
              TFRVLD
            </a>
            <div className="w-[1.5px] h-[5vh] bg-white ml-2"></div>
            <div className="flex items-center justify-center ml-2">
              <p className="font-outfit text-[12px] sm:text-[14px] md:text-[15px] lg:text-[20px] text-white">
                Web & Mobile App Developer
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-white hover:text-fourth transition duration-200 cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`mt-2 w-full rounded-[26px] bg-whitebg/25 backdrop-blur-md inset-shadow-white/50 inset-shadow-xs overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col items-center">
            {menuItems.map((item, index) => (
              <div
                key={item.label}
                className="w-full flex flex-col items-center"
              >
                <a
                  href={item.href}
                  onClick={() => handleLinkClick(item.id)}
                  className={`font-outfit text-[15px] sm:text-[17px] py-3 transition duration-200 ${
                    activeSection === item.id
                      ? "text-fourth underline"
                      : "text-white hover:text-fourth hover:underline"
                  }`}
                >
                  {item.label}
                </a>
                {index < menuItems.length - 1 && (
                  <div className="w-[80%] h-[1px] bg-white/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
