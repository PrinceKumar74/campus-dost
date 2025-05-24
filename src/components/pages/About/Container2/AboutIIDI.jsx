import React from "react";
import container2Pic1 from "../../../../assets/about/container2Pic1.jpg";
import container2Pic2 from "../../../../assets/about/container2Pic2.jpg";
import container2Pic3 from "../../../../assets/about/container2Pic3.jpg";
import container2Pic4 from "../../../../assets/about/container2Pic4.jpg"; // Add these images as needed
import container2Pic5 from "../../../../assets/about/container2Pic5.jpg";
import container2Pic6 from "../../../../assets/about/container2Pic6.jpg";

const AboutIIDI = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">
          CAMPUS DOST
        </h1>

        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
          We offer 100% placement assistance with resume building, mock
          interviews, and job referrals to support your career launch. Our
          courses are affordable, flexible, and tailored to fit your schedule,
          so you can learn without limits.
          <br />
          At Campus Dost, we’re committed to transforming learners into
          professionals — helping you gain the skills, experience, and guidance
          you need to build a bright future in tech.
        </p>

        {/* Why IIDI Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-blue-900">
            <span className="border-b-3 border-blue-900 pb-2">
              Why Choose Us?
            </span>
          </h2>

          {/* Cards Grid - 3 per row on desktop, 1 per row on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic1}
                alt="Industry-Aligned Curriculum"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  100% Placement Assistance
                </h3>
                <p className="text-gray-700">
                  <span className="text-yellow-600">
                    Your Success Is Our Mission --{" "}
                  </span>
                  Get dedicated career support with personalized mentorship, job
                  referrals, and placement drives. We work with hiring partners
                  to help you land your dream tech job.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic2}
                alt="Hands-On Learning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  Internship + Industry Certificate
                </h3>
                <p className="text-gray-700">
                  <span className="text-yellow-600">
                    Real Experience. Recognized Skills. --{" "}
                  </span>
                  Gain internship exposure during your course and receive a
                  certificate that proves your hands-on skills to employers.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic3}
                alt="Expert-Led Instruction"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  Mock Interviews & Resume Prep
                </h3>
                <p className="text-gray-700">
                  <span className="text-yellow-600">
                    Practice Makes Placement --{" "}
                  </span>
                  Sharpen your interview skills with live mock sessions,
                  technical rounds, and personalized resume reviews from
                  industry experts.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic4}
                alt="Career Support & Placement Assistance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  Monthly Hackathons & Coding Challenges
                </h3>
                <p className="text-gray-700">
                  <span className="text-yellow-600">
                    Compete. Create. Get Hired. --{" "}
                  </span>
                  Participate in real-time coding events, hackathons, and
                  contests that test your creativity, speed, and collaboration.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic5}
                alt="Flexible Learning Options"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  Live Classes + Doubt Support
                </h3>
                <p className="text-gray-700">
                  <span className="text-yellow-600">
                    Never Get Stuck Alone --{" "}
                  </span>
                  Attend live instructor-led classes and get your questions
                  answered instantly through doubtclearing sessions and peer
                  forums.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic6}
                alt="Globally Recognized Certification"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  Portfolio-Ready Projects
                </h3>
                <p className="text-gray-700">
                  <span className="text-yellow-600">
                    Show What You Can Build --{" "}
                  </span>
                  Work on multiple mini-projects and one capstone project that
                  you can proudly add to your GitHub and resume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIIDI;
