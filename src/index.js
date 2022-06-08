import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutMe from "./routes/about-me"
import Home from "./routes/home"
import Portfolio from "./routes/portfolio"
import Contact from "./routes/contact"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/personal-portfolio">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
);


