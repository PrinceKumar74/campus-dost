import React from 'react';
import { FaGraduationCap, FaClock, FaChartLine, FaLaptopCode, FaUserTie, FaCertificate } from 'react-icons/fa';

import {Link, useNavigate} from 'react-router-dom';

const CoursesSection = () => {
    const navigate = useNavigate();

  const handleReadMore = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const handleApplyNow =()=>{
    navigate('/contact')
  }

 const courses = [
  {
    id: "mernStack",
    title: "MERN Stack Development Certification",
    description: "Master full-stack development with MongoDB, Express.js, React.js, and Node.js.",
    duration: "3-4 Months",
    icon: <FaLaptopCode className="text-3xl text-yellow-600" />,
    highlights: [
      "HTML, CSS, JS",
      "React.js",
      "Node.js & Express.js",
      "MongoDB ",
      "REST APIs & Postman",
      "Git, GitHubt",
      "Deployment",
      "Fullstack MERN Project",
    ]
  },
  {
    id: "dataAnalyst",
    title: "Data Analyst Program Certification",
    description: "Become a data-savvy professional with tools and techniques used by top companies.",
    duration: "3-4 Months",
    icon: <FaGraduationCap className="text-3xl text-yellow-600" />,
    highlights: [
      "Advance Excel",
      "SQL",
      "Python for Data Analysis",
      "Power BI / Tableau",
      "Statistics & Data Interpretation",
      "Real-World Projects & Dashboards",
    ]
  },
  {
    id: "javaFullStack",
    title: "Java Full Stack Development Certification",
    description: "Build scalable applications with core Java and modern full-stack frameworks.",
    duration: "3-4 Months",
    icon: <FaChartLine className="text-3xl text-yellow-600" />,
    highlights: [
      "Core Java & OOPs ",
      "Spring Boot",
      "MySQL",
      "HTML, CSS, JS ",
      "RESTful API ",
      "Git & GitHub",
      "Deployment",
      "Fullstack Java Project",
    ]
  }
];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
            Explore Our <span className="text-blue-900">Certification Programs</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Industry-relevant courses designed to give you the competitive edge in today's data-driven world.
          </p>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-6"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-blue-900/30 group"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-600">{course.title}</h3>
                    <div className="flex items-center mt-1 text-gray-400 text-sm">
                      <FaClock className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{course.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-yellow-600 mb-2">KEY TOPICS COVERED:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.highlights.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 py-2 bg-blue-900 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-300" onClick={() => handleReadMore(course.id)}>
                    Learn More
                  </button>
                  <button className="flex-1 py-2 border border-gray-600 text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors duration-300" 
                  onClick={() => handleApplyNow()}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CoursesSection; 