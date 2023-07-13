import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Upcommingprojects } from './components/Upcommingprojects';
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { About } from './components/About';
import { Hero } from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import Preloader from './components/Preloader';
function App() {
  useEffect(() => {
    AOS.init({ once: true, });
    const preloader = document.getElementById("preloader")
    setTimeout(() => {
      preloader.classList.add("d-none")
      preloader.classList.add("pointer-event-none")
      document.body.classList.remove("overflow-hidden")
    }, 3000)
    document.body.classList.add("overflow-hidden")
  }, [])
  return (
    <div>
      <Preloader />
      <Hero />
      <Upcommingprojects />
      <Services />
      <Projects />
      <About />
    </div>
  );
}

export default App;
