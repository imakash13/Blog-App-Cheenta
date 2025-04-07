import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import EditPost from './pages/EditPost';
import About from './pages/About';
import Contact from './pages/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="post/:id" element={<PostDetails />} />
            <Route path="edit/:id" element={<EditPost />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);