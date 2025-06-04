import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ImageSlider, AudioPlayer, Footer } from "./components";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
        console.log("%cDesign and copyright - Baburao Adkane", "color: #999; font-size: 12px;");
    }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />        
        <Works />
        <Tech />
        <Feedbacks />
        <ImageSlider />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <AudioPlayer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
