import React, { useState } from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaAddressBook, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setSubscriptionStatus('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscriptionStatus('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubscriptionStatus(null);

    try {
      await emailjs.send(
        "service_cx5s3pl",     
        "template_7vgmdqa", 
        {
          email: email,
        },
        "V8UdzlCNIr0JaZWfs"
      );
      setSubscriptionStatus('success');
      setEmail("");
    } catch (error) {
      console.error('Failed to send subscription email:', error);
      setSubscriptionStatus('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-blue-900 text-white py-8">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Certifications */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-600">Certifications</h3>
            <ul className="space-y-2">
              {[
                { name: "Mern Stack", link: "/course/mernStack" },
                { name: "Data Analytics", link: "/course/dataAnalyst" },
                { name: "Java Full Stack", link: "/course/javaFullStack" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-600">About</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Courses", link: "/course" },
                { name: "Privacy Policy", link: "/privacy" },
                { name: "Terms & Conditions", link: "/terms" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-600">Get In Touch</h3>
            <div className="flex items-center mb-2">
              <FiPhoneCall className="text-yellow-600 mr-2" />
              <span className="text-gray-300">+91 9990597240</span>
            </div>
            <div className="flex items-center mb-4">
              <FiMail className="text-yellow-600 mr-2" />
              <span className="text-gray-300"> info@campusdost.com</span>
            </div>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-600">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Get latest updates to your mailbox directly!
            </p>

            {/* Subscription status messages */}
            {subscriptionStatus === 'success' && (
              <div className="mb-4 p-2 bg-green-800 text-white rounded-md">
                Thank you for subscribing!
              </div>
            )}
            {subscriptionStatus && subscriptionStatus !== 'success' && (
              <div className="mb-4 p-2 bg-red-800 text-white rounded-md">
                {subscriptionStatus}
              </div>
            )}

            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full p-2 bg-blue-800 border border-blue-500 rounded-md focus:outline-none focus:border-yellow-600 text-white"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-yellow-600 text-blue-900 px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Subscribe'}
              </button>
            </form>

            {/* Social media icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/campusdost.in?igsh=djZ0OWg3cXBxeHRm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                  href="https://wa.me/+919990597240"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
                > 
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com "
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-600 transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-blue-500 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <span className="text-gray-400">
              © 2025. All Rights Reserved
            </span>
          </div>
          {/* Links */}
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-yellow-600 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-yellow-600 hover:text-white transition-colors duration-300"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;