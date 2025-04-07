import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import EditPost from './pages/EditPost';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
