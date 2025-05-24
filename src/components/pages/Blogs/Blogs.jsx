import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import crypto from '../../../assets/blogs/cryto.jpg'
import dataScience from '../../../assets/blogs/dataScience.jpg'
import digitalMarketing from '../../../assets/blogs/digitalMarketing.jpg'
import ethicalAI from '../../../assets/blogs/ethicalAI.jpg'
import webDev from '../../../assets/blogs/webDev.png'
import remoteWork from '../../../assets/blogs/remoteWork.jpg'

const BlogSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top on route change
  }, [pathname]);

  const navigate = useNavigate();
  const handleReadMore = (articleId) => {
    navigate(`/blogs/${articleId}`);
    console.log("from blogs page:",articleId); 
  }

 const articles = [
  {
    id: "digitalMarketing",
    title: "Leveraging Social Media Algorithms for Maximum Brand Reach in 2025",
    excerpt: "Unlock the power of platform-specific algorithms to boost visibility and engagement organically.",
    category: "Marketing",
    date: "April 10, 2025",
    image: digitalMarketing,
    readTime: "5 min read"
  },
  {
    id: "remoteWork",
    title: "Building Trust in Virtual Teams: A Guide for Modern Leaders",
    excerpt: "How to foster accountability, transparency, and trust in remote and hybrid work environments.",
    category: "HR",
    date: "May 12, 2025",
    image: remoteWork,
    readTime: "6 min read"
  },
  {
    id: "webDev",
    title: "Progressive Web Apps: Bridging the Gap Between Web and Mobile",
    excerpt: "Explore how PWAs are redefining user experience with app-like performance on the web.",
    category: "Web Dev",
    date: "March 30, 2025",
    image: webDev,
    readTime: "4 min read"
  },
  {
    id: "dataScience",
    title: "Data Science in Retail: Personalization at Scale",
    excerpt: "How retailers are using big data and machine learning to tailor shopping experiences.",
    category: "Data Science",
    date: "June 1, 2025",
    image: dataScience,
    readTime: "7 min read"
  },
  {
    id: "finance",
    title: "Decentralized Finance (DeFi): The Future of Financial Services",
    excerpt: "Understanding how DeFi is disrupting traditional banking and investment systems.",
    category: "Finance",
    date: "April 5, 2025",
    image: crypto,
    readTime: "6 min read"
  },
  {
    id: "artificialIntelligence",
    title: "AI in Education: Transforming Learning Experiences",
    excerpt: "From personalized learning paths to intelligent tutoring systems – AI’s role in modern education.",
    category: "Artificial Intelligence",
    date: "July 10, 2025",
    image: ethicalAI,
    readTime: "9 min read"
  }
];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Industry <span className="text-yellow-600">Insights</span>
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Latest trends, news and analysis from the world of business and technology
          </p>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-6"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="bg-blue-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-[#b42638]/30 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
                <span className="absolute top-4 left-4 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 hover:text-yellow-600 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 mb-5">{article.excerpt}</p>
                
                <button className="text-yellow-600 font-medium flex items-center hover:underline" onClick={() => handleReadMore(article.id)}>
                  Read Full Article
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;