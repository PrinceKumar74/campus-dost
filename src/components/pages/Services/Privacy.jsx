import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
      <p className="text-gray-600 mb-8 border-b pb-6">Last updated: November 1, 2025</p>

      <div className="bg-white rounded-lg shadow-md p-8">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At <strong>Campus Dost</strong>, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Please read this policy carefully. By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our practices, please do not use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Personal Information:</strong> Name, email, phone number, educational background, payment details, and other information you provide during registration or course enrollment.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our website and services, such as IP address, browser type, pages visited, and session duration.</li>
            <li><strong>Cookies:</strong> Small files stored on your device to enhance your experience and collect analytics data.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>To provide and manage your access to our courses and services.</li>
            <li>To communicate with you about your account, course updates, and offers.</li>
            <li>To improve our website and tailor your learning experience.</li>
            <li>To process payments securely.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing & Security</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We do not sell or rent your personal information to third parties.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We may share data with trusted service providers (payment gateways, email services) under strict confidentiality agreements to support our operations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of promotional communications at any time.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            To exercise these rights, please contact us at <a href="mailto:info@campusdost.com" className="text-blue-600 underline">info@campusdost.com</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies & Tracking Technologies</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our site uses cookies to improve functionality and analyze traffic. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We’ll notify you of any significant changes via email or website notifications. The “Last updated” date at the top indicates when this policy was last revised.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-1">Email</h3>
              <p className="text-gray-700"><a href="mailto:info@campusdost.com" className="text-blue-600 underline">info@campusdost.com</a></p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
              <p className="text-gray-700">+91 999059724</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;