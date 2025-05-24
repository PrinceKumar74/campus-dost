
import meanMern from "../../../assets/course/meanMern.jpg"
import dataAnalyst from "../../../assets/course/dataAnalyst.jpg"
import javaFullStack from "../../../assets/course/javaFullStack.jpg"


const allCourses = {
  "mernStack": {
    title: "Certification in MERN Stack Development",
    description:
      "Master full-stack web development using the modern MERN (MongoDB, Express.js, React, Node.js) stack. This hands-on course equips students with the skills to build scalable, high-performance web applications using JavaScript-based technologies for both frontend and backend. Learn to develop RESTful APIs, implement secure authentication, manage state, and deploy real-world applications using cloud platforms like AWS and Heroku.",
    image: meanMern,
    curriculum: [
      "Introduction to Web Development & MERN Stack",
      "HTML5, CSS3, and Responsive Design",
      "JavaScript Fundamentals and ES6+",
      "Introduction to React – Components, Props, State",
      "Advanced React – Hooks, Context API, Routing",
      "Building Reusable UI Components with React",
      "Introduction to Node.js and NPM",
      "Backend Development with Express.js",
      "MongoDB Database Design and CRUD Operations",
      "Building RESTful APIs with Express and MongoDB",
      "Authentication and Authorization (JWT, OAuth)",
      "State Management with Redux and Context API",
      "Testing and Debugging MERN Applications",
      "Deployment Strategies – Cloud Hosting, CI/CD",
      "Capstone Project – Full-Stack MERN Application"
    ],
    duration: "3-4 months",
    lessons: 15,
    tag: "MERN, Full Stack, Web Development"
  },
  "dataAnalyst": {
    title: "Certification in Data Analytics & Visualization",
    description:
      "This comprehensive program prepares students for a successful career in data analytics by teaching them how to clean, process, analyze, and visualize large datasets using industry-standard tools such as Python, SQL, Excel, Tableau, and Power BI. Learn statistical analysis, data storytelling, dashboard creation, and gain insights that drive business decisions.",
    image: dataAnalyst,
    curriculum: [
      "Introduction to Data Analytics and Business Intelligence",
      "Understanding Data Types and Sources",
      "Excel for Data Analysis – Functions, Pivot Tables, Charts",
      "SQL for Data Querying and Manipulation",
      "Introduction to Python for Data Analysis",
      "Data Cleaning and Preprocessing Techniques",
      "Statistical Analysis and Hypothesis Testing",
      "Data Visualization Principles and Best Practices",
      "Creating Dashboards with Tableau",
      "Data Visualization with Power BI",
      "Time Series Analysis and Forecasting",
      "Introduction to Machine Learning for Analysts",
      "Big Data Concepts and Tools Overview",
      "Storytelling with Data and Reporting",
      "Capstone Project – End-to-End Data Analysis and Presentation"
    ],
    duration: "3-4 months",
    lessons: 15,
    tag: "Data Analytics, Python, SQL, Tableau"
  },
  "javaFullStack": {
    title: "Certification in Java Full Stack Development",
    description:
      "Dive into the world of enterprise-grade application development with Java. This course covers both frontend and backend technologies, including core Java, Spring Boot, Hibernate, JSP, Servlets, Angular, and MySQL. Students will learn to build scalable, secure, and maintainable applications suitable for banking, finance, and e-commerce sectors.",
    image: javaFullStack,
    curriculum: [
      "Introduction to Java Programming and OOPs Concepts",
      "Core Java – Collections, Exceptions, Multithreading",
      "Introduction to Web Technologies (HTML/CSS/JS)",
      "Frontend Development with Angular",
      "Working with TypeScript and Angular Components",
      "Backend Development with Servlets and JSP",
      "Introduction to Spring Framework (IoC, AOP)",
      "Spring Boot – Auto Configuration and REST APIs",
      "Database Connectivity with JDBC and Hibernate",
      "ORM Mapping with Hibernate and JPA",
      "Securing Applications with Spring Security",
      "RESTful Web Services with Spring MVC",
      "Microservices Architecture with Spring Boot",
      "Integration with MySQL and PostgreSQL",
      "Capstone Project – Java Full Stack E-Commerce Application"
    ],
    duration: "3-4 months",
    lessons: 15,
    tag: "Java, Spring Boot, Full Stack"
  }
};

export default allCourses;