import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Terms from "./components/pages/Services/Terms";
import Contact from "./components/pages/ContactUs/Contact";
import Footer from "./components/pages/Footer/Footer";
import Header from "./components/pages/Header/Header";
import Blogs from "./components/pages/Blogs/Blogs";
import CourseDetailPage from "./components/pages/Course/CourseDetailPage";
import Course from "./components/pages/Course/Course";
import BlogDetailPage from "./components/pages/Blogs/BlogDetailPage";
import NotFound from "./components/pages/NotFound/NotFound";
import Privacy from "./components/pages/Services/Privacy";
import WhatsappIcon from "./components/pages/WhatsappIcon/WhatsappIcon";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <Layout title="Home | Campus Dost" description="Welcome to our homepage">
              <Home />
            </Layout>
          } />
          
          <Route path="/about" element={
            <Layout title="About Us | Campus Dost" description="Learn more about our company">
              <About />
            </Layout>
          } />
          
          <Route path="/contact" element={
            <Layout title="Contact Us | Campus Dost" description="Get in touch with our team">
              <Contact />
            </Layout>
          } />
          
          <Route path="/blogs" element={
            <Layout title="Blog Articles | Campus Dost" description="Read our latest blog posts">
              <Blogs />
            </Layout>
          } />
          
          <Route path="/blogs/:blogSlug" element={
            <Layout title="Blog Post | Campus Dost" description="Read this interesting article">
              <BlogDetailPage />
            </Layout>
          } />
          
          <Route path="/course" element={
            <Layout title="Our Courses | Campus Dost" description="Explore our educational courses">
              <Course />
            </Layout>
          } />
          
          <Route path="/course/:courseSlug" element={
            <Layout title="Course Details | Campus Dost" description="Learn about this course">
              <CourseDetailPage />
            </Layout>
          } />
          
          <Route path="/terms" element={
            <Layout title="Terms of Service | Campus Dost" description="Our terms and conditions">
              <Terms />
            </Layout>
          } />
          
          <Route path="/privacy" element={
            <Layout title="Privacy Policy | Campus Dost" description="How we handle your data">
              <Privacy />
            </Layout>
          } />
          
          {/* Not Found Page */}
          <Route path="*" element={
            <Layout title="Page Not Found | Campus Dost" description="This page doesn't exist">
              <NotFound />
            </Layout>
          } />
        </Routes>

        <Footer />
        <WhatsappIcon />
      </div>
    </Router>
  );
};

export default App;