import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;