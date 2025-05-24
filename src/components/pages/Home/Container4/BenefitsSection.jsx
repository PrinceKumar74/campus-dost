import React from 'react';
import { FiBookOpen, FiBriefcase, FiUsers, FiFile } from 'react-icons/fi'; // Icons

const BenefitsSection = () => {
  
const benefits = [
  {
    icon: <FiBookOpen className="text-yellow-600 text-4xl" />,
    title: "Extensive Hands-On Assignments with Round-the-Clock Support",
    description: "Strengthen your understanding through a wide range of practical assignments, backed by expert support available 24/7.",
  },
  {
    icon: <FiFile className="text-yellow-600 text-4xl" />,
    title: "Real-World Industry Projects",
    description: "Gain practical experience by working on real-life projects that simulate industry challenges and data scenarios.",
  },
  {
    icon: <FiBriefcase className="text-yellow-600 text-4xl" />,
    title: "Strong Industry Connections",
    description: "We maintain robust partnerships with a large network of hiring companies, helping connect skilled learners with career opportunities.",
  },
  {
    icon: <FiUsers className="text-yellow-600 text-4xl" />,
    title: "Comprehensive Job Readiness Program",
    description: "Our dedicated placement support team assists certified learners with career preparation, including resume building, interview training, and job matching.",
  },
];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">{benefit.icon}</div>

              {/* Title */}
              <h3 className="text-xl text-blue-900 font-bold text-center mb-2">{benefit.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;