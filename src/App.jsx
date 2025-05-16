import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import  Layout  from "./Layout";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path="/hero" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech" element={<Technologies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          </Route>
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
