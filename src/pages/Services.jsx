import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  // Core services tailored for our admissions support page
  const coreServices = [
    {
      id: 1,
      category: 'College Counseling & Selection',
      heading: 'Find the Right College for You',
      description:
        'Receive personalized counseling to match your strengths and interests with top colleges across the nation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18c-2.21 0-4-1.79-4-4 0-.414.336-.75.75-.75h6.5c.414 0 .75.336.75.75 0 2.21-1.79 4-4 4z" />
        </svg>
      ),
    },
    {
      id: 2,
      category: 'Application Assistance',
      heading: 'Seamless Application Process',
      description:
        'Get expert help with every detail of your college applications—from form filling to essay polishing.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12H8m8 0l-3-3m3 3l-3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 18h16" />
        </svg>
      ),
    },
    {
      id: 3,
      category: 'Entrance Exam Guidance',
      heading: 'Crack the Exams with Confidence',
      description:
        'Access proven strategies, practice resources, and expert guidance to excel in your entrance examinations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0l3-3m-3 3l-3-3" />
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        </svg>
      ),
    },
    {
      id: 4,
      category: 'Document Assistance',
      heading: 'Document Review & Submission Support',
      description:
        'Ensure your transcripts, certificates, and applications are in perfect order with our expert review.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 5,
      category: 'Placement Assistance',
      heading: 'Supporting You Beyond Admission',
      description:
        'Coming soon! We are working on helping you transition from college to career with effective placement support.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7l9 6 9-6M4 19h16" />
        </svg>
      ),
    },
    {
      id: 6,
      category: 'Free Resources',
      heading: 'Access the Tools You Need',
      description:
        'Enjoy free webinars, guides, and resources designed to help you excel in every aspect of your admission journey.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
  ];

  // FAQs for this page
  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Simply book a free consultation through our website, and one of our expert counselors will get in touch with you.',
    },
    {
      question: 'Are all your services completely free?',
      answer: 'Yes, our consultation and core services are provided at no cost to the student. We believe in guiding you without any financial burden.',
    },
    {
      question: 'How personalized is your counseling process?',
      answer: 'We offer tailored support that caters to your individual strengths, preferences, and academic goals, ensuring a customized path to success.',
    },
    {
      question: 'Can I access support for both college admissions and career guidance?',
      answer: 'Absolutely. Our services span the entire spectrum of your educational journey—from selecting the right college to preparing for entrance exams and beyond.',
    },
    {
      question: 'Do you offer virtual consultations?',
      answer: 'Yes, we provide both in-person and virtual sessions to cater to students across different locations and preferences.',
    },
  ];

  return (
    <>
      {/* Introduction Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services: Empowering You to Make the Right College Choice
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Comprehensive, Personalized Support for Every Step of Your Admission Journey
          </p>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tailored Services to Help You Succeed</h2>
            <p className="text-gray-600 text-lg">
              Each step of the admission process, made easy and accessible.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 flex justify-center">
                  {service.icon}
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.heading}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why We’re the Right Choice for You</h2>
          <ul className="max-w-3xl mx-auto text-gray-700 text-lg space-y-4">
            <li>
              <strong>Completely Free of Charge:</strong> Unlike most consultants, we do not charge any fees from students. Our mission is to help you succeed without financial burden.
            </li>
            <li>
              <strong>Tailored Support:</strong> We offer personalized services based on your individual needs and goals.
            </li>
            <li>
              <strong>Expert Advice:</strong> Our team consists of experienced counselors and experts who are dedicated to helping you succeed.
            </li>
            <li>
              <strong>End-to-End Service:</strong> From college selection to placement, we support you throughout your academic journey.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Have questions about our services? Find answers to common inquiries below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Services;
