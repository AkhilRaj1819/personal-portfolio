import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code,
  LayoutDashboard,
  Palette,
  Info,
  Sparkle
} from "lucide-react";

const specialityData = [
  {
    title: "Development",
    text: "Building scalable, maintainable, and high-performance web applications using React, Node.js, and modern backend tools.",
    imgSrc:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80",
    alt: "Development Work",
    icon: <Code size={20} className="text-[#30AF5B]" />,
  },
  {
    title: "UI/UX Design",
    text: "Designing intuitive user interfaces and experiences that focus on accessibility, usability, and aesthetic appeal.",
    imgSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
    alt: "UI UX Design",
    icon: <LayoutDashboard size={20} className="text-[#30AF5B]" />,
  },
  {
    title: "Branding",
    text: "Crafting compelling brand identities that resonate with target audiences and elevate business presence.",
    imgSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    alt: "Branding",
    icon: <Palette size={20} className="text-[#30AF5B]" />,
  },
];

const defaultImage =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80";

const Speciality = ({ isDark }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="flex text-[#30AF5B] font-bold mb-[10px] items-center gap-2">
        <Sparkle />
        Speciality
      </h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Heading + Accordion list */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-5xl font-bold mb-6 text-[#30AF5B]">
            Areas of Expertise
          </h3>

          <div className="flex flex-col gap-4">
            {specialityData.map(({ title, text, imgSrc, alt, icon }, idx) => (
              <div
                key={title}
                className={`border border-black rounded-lg overflow-hidden cursor-pointer ${
                  openIndex === idx
                    ? isDark
                      ? "bg-[#2f2f2f]"
                      : "bg-[#f0f0f0]"
                    : isDark
                    ? "bg-[#1c1c1c]"
                    : "bg-white"
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className={`w-full flex justify-between items-center px-6 py-4 font-semibold text-lg bg-transparent ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {icon}
                    <span>{title}</span>
                  </div>
                  {openIndex === idx ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>

                {openIndex === idx && (
                  <div
                    className={`px-6 py-6 text-base leading-relaxed border-t border-black flex items-start gap-2 ${
                      isDark ? "bg-[#2f2f2f] text-white" : "bg-white text-black"
                    }`}
                  >
                    <Info size={20} className="text-[#30AF5B] mt-1" />
                    <p>{text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={
              openIndex !== null
                ? specialityData[openIndex].imgSrc
                : defaultImage
            }
            alt={
              openIndex !== null
                ? specialityData[openIndex].alt
                : "Default Speciality"
            }
            className="rounded-lg shadow-lg object-cover max-h-96 w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Speciality;
