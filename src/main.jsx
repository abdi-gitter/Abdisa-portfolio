// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './components/Layout.jsx'; 
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';
import Contact from './components/Contact/Contact.jsx';
import Linkedin from './components/Linkedin/Linkedin.jsx';

// Define your router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} />
      <Route path="linkedin" element={<Linkedin />} />
      <Route path="user/:userId" element={<User />} /> 
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
)


// Attach the app to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
