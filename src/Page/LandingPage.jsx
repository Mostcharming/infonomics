import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/HeroSection/Hero";
import About from "../components/AboutSection/About";
import Choose from "../components/ChooseSection/Choose";
import System from "../components/SystemsSection/System";
import Project from "../components/Project/Project";
import Contact from "../components/ContactUsSection/Contact";
import { useThemeContext } from "../context/Context";
import "./Style.scss";
import "./css/index.css";

import { Modal } from "reactstrap";


const LandingPage = () => {
  const location = useLocation();
  const { theme } = useThemeContext();
  const [demoModal, setDemoModal] = React.useState(true);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className="general_content_container"
      style={{ background: theme === "light" ? "#fff" : "#181a42" }}>
      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square1"
      />

      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square2"
      />

      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square3"
      />

      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square4"
      />
      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square5"
      />

      
      <img
        src="/bgJar.svg"
        alt="background"
        className="background_square square6"
      />

      <Header />

      <Modal isOpen={demoModal} toggle={() => setDemoModal(false)}>
        <div className="modal-header justify-content-center">
          <button className="close" onClick={() => setDemoModal(false)}>
          X
            {/* <i className="tim-icons icon-simple-remove" /> */}
          </button>
          <h4 className="title title-up">PRESS RELEASE/DISCLAIMER</h4>
        </div>
        <div className="modal-body">
          <p>
            Our attention has been drawn to certain notices and or publications
            on some internet website specifically{' '}
            <span style={{ fontWeight: 'bold' }}>infonomics.live </span>
            where the name of our reputable company{' '}
            <span style={{ fontWeight: 'bold' }}>
              INFONOMICS TECHNOLOGY SERVICES LIMITED
            </span>{' '}
            purporting to connect our company with an online technology digital
            lending App known as{' '}
            <span style={{ fontWeight: 'bold' }}>INFONOMICS LOAN </span>{' '}
            midwifed by{' '}
            <span style={{ fontWeight: 'bold' }}>
              RAGEKAY GLOBAL INVESTMENT LIMITED.{' '}
            </span>{' '}
            <br />
            <br />
            We hereby alert the public that our company{' '}
            <span style={{ fontWeight: 'bold' }}>
              INFONOMICS TECHNOLOGY SERVICES LIMITED
            </span>{' '}
            is not and has never been in partnership with{' '}
            <span style={{ fontWeight: 'bold' }}>
              RAGEKAY GLOBAL INVESTMENT LIMITED.{' '}
            </span>{' '}
            for the purpose of creating or operating a lending App called{' '}
            <span style={{ fontWeight: 'bold' }}>‘INFONOMICS LOAN’ </span> or
            any other App whatsoever. Our company is not associated in any way
            with{' '}
            <span style={{ fontWeight: 'bold' }}>
              RAGEKAY GLOBAL INVESTMENT LIMITED.{' '}
            </span>{' '}
            . For avoidance of doubt our company is not involved in the business
            of money lending.
            <br />
            <br />
            Signed,
            <br />
            MANAGEMENT
          </p>
        </div>
      </Modal>

      <div className="general_container">
        <Hero />
        <About />
        <System />
        <Project />
        <Choose />
        <Contact />
      </div> 
    </div>
  );
};

export default LandingPage;
