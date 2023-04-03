import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';

import Contact    from './components/pages/Contact';
import Home       from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Company    from './components/pages/Company';
import Projects   from './components/pages/Projects';

import Container from './components/Layout/Container';
import Navbar    from './components/Layout/Navbar';
import Footer    from './components/Layout/Footer';

function App() {

  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
            />
          <Route 
            path="/company"
            element={
              <Company />
            }
          />
          <Route 
            path="/projects"
            element={
              <Projects />
            }
          />
          <Route 
            path="/contact"
            element={
              <Contact />
            }
            />
          <Route path="/newproject"
            element={
              <NewProject />
            }
          />
        </Routes>
      </Container>      
      <Footer />
    </Router>
  );
}
export default App;
