import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-800 py-24 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Your College Admission Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Guiding Students to Their Dream College, Every Step of the Way
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Empowering Students to Make Informed Decisions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We equip you with the knowledge, tools, and confidence to choose the right academic and career path.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Our Services at a Glance
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <li className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <span className="font-semibold">College Counseling</span>
            </li>
            <li className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <span className="font-semibold">Application Assistance</span>
            </li>
            <li className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <span className="font-semibold">Entrance Exam Guidance</span>
            </li>
            <li className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <span className="font-semibold">Document Assistance</span>
            </li>
            <li className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <span className="font-semibold">Placement Assistance</span>
              <span className="text-xs text-gray-500 block">Coming Soon</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why We’re Different
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our personalized approach, industry expertise, and commitment to transparency set us apart. We work one-on-one with each student—ensuring you receive the guidance needed to stand out in today’s competitive environment.
          </p>
        </div>
      </section>

      {/* Our Story Section (Optional) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How We Started</h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Founded in 2010 with a vision to simplify the admission journey, our service began as a small practice focused on personalized guidance. Today, our influence spans thousands of success stories.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our growth has been driven by an unwavering commitment to student success and an understanding that every journey is unique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Changing Lives, One Admission at a Time
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            With our expert guidance, countless students have secured spots in top-tier colleges, unlocking doors to infinite opportunities. Our impact is measured not just in admissions, but in transformed futures.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Connect with our team of experts and take the first step toward an inspiring future.
          </p>
          <Link 
            to="/CollegeFinder" 
            className="bg-white text-blue-700 font-bold py-4 px-12 rounded-full hover:bg-blue-50 transition duration-300 inline-block text-lg shadow-xl transform hover:-translate-y-1"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
