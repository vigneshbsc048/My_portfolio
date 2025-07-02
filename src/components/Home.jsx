import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
// import heroBg from "../assets/img/hero-bg.jpg";
import heroBg from "../assets/img/banner1.jpg";
// import heroBg from "../assets/img/banner2.jpg";
// import heroBg from "../assets/img/banner3.jpg";
// import heroBg from "../assets/img/banner4.jpg";
// import heroBg from "../assets/img/banner5.jpg";
import "../assets/css/main.css";
import "./css/Home.css";

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Developer", "Freelancer", "Designer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroBg} alt="Hero background" data-aos="fade-in" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Vignesh Kumar</h2>
        <p>
          I'm <span className="typed" ref={typedElement}></span>
        </p>
        <div className="Maindiv">
          <a href="/My_portfolio/my-cv.pdf" className="GITbutton">
            Download CV
            <div className="hoverEffect">
              <div className="divname"></div>
            </div>
          </a>

          <a href="/My_portfolio/#contact" className="cta">
            <span>Hire me</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
