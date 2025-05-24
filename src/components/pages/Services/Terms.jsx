import React from "react";
import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const TermsAndConditions = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-400 to-blue-900 py-20 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Terms & Conditions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Last updated:  24 May, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">

          <div className="bg-[#b42638]/10 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
            <p className="text-gray-700">
              Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-6">
            Welcome to <strong>Campus Dost</strong>. These Terms and Conditions govern your access to and use of our website, learning platform, and services. By registering or using our services, you agree to be bound by these terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            2. Use of Our Services
          </h2>
          <ul className="mb-6 space-y-2 list-disc pl-6">
            <li>You must be at least 16 years old to register and enroll in any of our courses.</li>
            <li>You agree to provide accurate information during registration and keep your account details secure.</li>
            <li>Campus Dost reserves the right to suspend accounts in case of misuse or violation of these terms.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            3. Course Access & Usage
          </h2>
          <ul className="mb-6 space-y-2 list-disc pl-6">
            <li>Course content (videos, PDFs, projects, etc.) is for your personal use only and may not be shared, copied, or redistributed without permission.</li>
            <li>Access to courses is valid as per the duration mentioned at enrollment.</li>
            <li>We may update or modify course content to maintain relevance and accuracy.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            4. Fees & Payments
          </h2>
          <ul className="mb-6 space-y-2 list-disc pl-6">
            <li>All course fees must be paid in full (or as per payment plan) before access is granted.</li>
            <li>Payments are handled securely via trusted third-party gateways.</li>
            <li>Campus Dost is not responsible for payment gateway delays or failures.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            5. Certification
          </h2>
          <ul className="mb-6 space-y-2 list-disc pl-6">
            <li>Certificates are awarded upon successful completion of the course, assessments, and project submissions.</li>
            <li>Campus Dost reserves the right to withhold certificates if any academic dishonesty is detected.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            6. Code of Conduct
          </h2>
          <ul className="mb-6 space-y-2 list-disc pl-6">
            <li>Learners are expected to maintain respectful and professional behavior in classes, forums, and interactions.</li>
            <li>Any abuse, harassment, or misconduct will result in removal from the course without refund.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-6">
            Campus Dost is not liable for any direct or indirect damages resulting from the use or inability to use our services, including loss of data, employment, or income.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            8. Changes to Terms
          </h2>
          <p className="text-gray-700 mb-6">
            We may update these Terms and Conditions from time to time. Continued use of the platform implies acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            9. Refund Policy
          </h2>
          <p className="text-gray-700 mb-6">
            All course purchases are non-refundable. Due to the nature of digital content and resources provided, Campus Dost does not offer refunds under any circumstances. Please review all course details carefully before enrolling.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            10. Contact Us
          </h2>
          <p className="text-gray-700 mb-6">
            For any queries related to these terms, please contact:
            <br />
            <a href="mailto:info@campusdost.com" className="text-blue-900 hover:underline">
              info@campusdost.com
            </a>
            <br />
            Phone: +91-999059
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
            <p className="text-gray-700">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;