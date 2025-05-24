import React from "react";
import {
  FaGraduationCap,
  FaTasks,
  FaProjectDiagram,
  FaUserTie,
  FaBriefcase,
} from "react-icons/fa";
import { MdOutlineInterests } from "react-icons/md";

const LearningPath = () => {
  const steps = [
    {
      icon: <FaGraduationCap className="text-2xl text-yellow-600" />,
      title: "Foundations First",
      description:
        "Start with the basics. Get a solid grasp of core concepts like programming fundamentals, tools setup, and web basics (HTML, CSS, Git, etc.)",
    },
    {
      icon: <FaTasks className="text-2xl text-yellow-600" />,
      title: "Hands-On Skill Building",
      description:
        "Dive deeper with practical, hands-on modules. Learn by doing real-world tasks, coding projects, and solving problems.",
    },
    {
      icon: <FaProjectDiagram className="text-2xl text-yellow-600" />,
      title: "Capstone Projects",
      description:
        "Work on a major project that puts your skills to the test — build something impressive to showcase in your portfolio.",
    },
    {
      icon: <FaBriefcase className="text-2xl text-yellow-600" />,
      title: "Career Launch Support",
      description:
        "Get career-ready with resume workshops, mock interviews, LinkedIn profile reviews, and job placement assistance.",
    },
    {
      icon: <FaTasks className="text-2xl text-yellow-600" />,
      title: "Certification & Beyond",
      description:
        "Earn an industry-recognized certificate from Campus Dost and join a network of alumni and professionals.",
    },
  ];

  return (
    <div className="bg-blue-500 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            <span className="text-blue-900">Learning</span> Path
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-yellow-600 transform -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Mobile view */}
                <div className="md:hidden flex items-start mb-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    {step.icon}
                  </div>
                </div>

                {/* Desktop content */}
                <div
                  className={`hidden md:flex w-1/2 ${
                    index % 2 === 0 ? "justify-end pr-8" : "justify-start pl-8"
                  }`}
                >
                  <div
                    className={`bg-blue-900 p-4 rounded-lg max-w-xs ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-blue-200 mt-2">{step.description}</p>
                  </div>
                </div>

                {/* Center icon (desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-blue-900 p-3 rounded-full border-4 border-yellow-600 z-10">
                  {step.icon}
                </div>

                {/* Mobile content */}
                <div className="md:hidden w-full bg-blue-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-blue-200 mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intensive Interview Preparation */}
        <div className="mt-16 text-center bg-blue-900 rounded-xl p-8 max-w-2xl mx-auto border-l-4 border-yellow-600 shadow-lg">
          <div className="flex justify-center mb-4">
            <MdOutlineInterests className="text-3xl text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Community & Peer Networking{" "}
          </h3>
          <p className="text-blue-200">
            Join an active community of learners, participate in study groups,
            forums, and collaborative projects to build your professional
            network
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
