import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import CollegeFinder from './components/collegeFinder/CollegeFinder';
import Contact from './components/contact/Contact';
import Layout from './components/layout/Layout';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/CollegeFinder" element={<CollegeFinder />} />
          <Route path="/booking" element={<CollegeFinder />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
