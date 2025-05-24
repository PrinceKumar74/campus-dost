import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Check,
  Clock,
  Book,
  Globe,
  Award,
  Briefcase,
  ArrowRight,
  IndianRupee,
  Factory ,
  ChevronsLeftRightEllipsis 
} from "lucide-react";
import allCourses from "./courseData";
import { Link } from "react-router-dom";
import dummy from "../../../assets/course/dummy.jpg";

const CourseDetailPage = () => {
  const { courseSlug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCourse(allCourses[courseSlug]);
    setLoading(false);
  }, [courseSlug]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!course) {
    return <div className="text-center py-20">Course not found</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r  from-blue-400 to-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl text-white font-bold">{course.title}</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              {course.description1}
            </p>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Course Overview
              </h2>
              <div className="prose max-w-none">
                <p>{course.longDescription || course.description}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Curriculum
              </h2>
              <div className="space-y-4">
                {course.curriculum?.map((module, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-600"
                  >
                    <h3 className="font-medium text-gray-900">
                      Module {index + 1}: {module}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg sticky top-8 overflow-hidden">
              {/* Course Image */}
              <div className="h-48 bg-gray-100 overflow-hidden">
                {course.image ? (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-[#b42638]/20 to-gray-900/10 flex items-center justify-center">
                    <img
                      src={dummy}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Course Details
                </h3>

                {/* Course Features */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Duration</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.duration || "3 weeks"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Book className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Lessons</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.lessons || "8"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Language</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.language || "English / Hindi"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Course Certificate</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.certificate !== undefined
                        ? course.certificate
                          ? "Yes"
                          : "No"
                        : "Yes"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Job Assistance</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.jobAssistance !== undefined
                        ? course.jobAssistance
                          ? "Yes"
                          : "No"
                        : "Yes"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <ChevronsLeftRightEllipsis  className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Live Projects</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.liveProjects !== undefined
                        ? course.liveProjects
                          ? "Yes"
                          : "No"
                        : "Yes"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Factory  className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">3 Month Internship Certificate</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.intership !== undefined
                        ? course.internship
                          ? "Yes"
                          : "No"
                        : "Yes"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <IndianRupee className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Price</p>
                    </div>
                    <div className="text-right flex gap-2 item-center">
                      <p className=" text-gray-500 line-through">₹15,000/-</p>
                      <p className="font-medium text-gray-900">
                        {course.pricing !== undefined
                          ? course.pricing
                            ? "₹5,999/-"
                            : "No"
                          : "₹6,999/-"}
                      </p>
                    </div>
                  </div>

                  <hr className="border-gray-200" />
                </div>

                {/* Additional Features */}
                {course.features && (
                  <div className="mb-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-yellow-600 mr-2" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Enroll Now Button at Bottom */}
                <a
                  href="https://wa.me/+919990597240"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-900 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors duration-300 mt-6"
                >
                  Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
