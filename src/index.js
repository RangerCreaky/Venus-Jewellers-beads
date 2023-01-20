import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import About from './components/About';
import Contact from './components/Contact';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Signup />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

