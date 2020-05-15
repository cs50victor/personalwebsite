import React, { useRef, useEffect } from 'react';
//-------Icons(font awesome)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin ,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from "@fortawesome/fontawesome-free-solid";
//------Bootstrap and SASS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';

//------Animation 
import HALO from "vanta/dist/vanta.halo.min";
import {TweenMax, Power3} from "gsap";
//--------------Assets 
import myface from "./images/face.png";


export default function App(){
  let animBoxHead = useRef(null);
  useEffect(() =>{
    let vantaEffect = HALO({
      el: animBoxHead,
      mouseControls: true,
      touchControls: true,
      baseColor: 0x593700,
      backgroundColor: 0x0,
      amplitudeFactor: 1.00,
      yOffset: -0.02,
      size: 2.90,
      sizeMobile: 1.00,
    });
    TweenMax.to(animBoxHead,3,{opacity: 1,y: -20,ease: Power3.easeOut})
    return() => {
      if (vantaEffect) vantaEffect.destroy()
    }
  },[])
  return (
    <React.Fragment>
      <header className="py-0 fixed-top d-flex">
        <div className="container">
          <nav className="navbar d-flex mx-1">
            <div className="d-flex justify-content-start">
              <a className="navbar-brand" href="./">[ Victor Atasie ]</a>
            </div>
            <div className="d-flex justify-content-end">
                  <a href="#projects" className="mr-2 navbar-brand">Projects |</a>
                  <a href="https://www.linkedin.com/in/victoratasie1/" target="_blank" rel="noopener noreferrer" className="mr-2">
                    <FontAwesomeIcon icon={faLinkedin} size={"sm"}/>
                  </a>
                  <a href="https://github.com/cs50victor" target="_blank"rel="noopener noreferrer" className="mr-2">
                    <FontAwesomeIcon icon={faGithub} size={"sm"}/>
                  </a>
                  <a href="mailto:atasiev10@mycu.concord.edu?Subject=From%20your%20website." target="_top" className="mr-2">
                    <FontAwesomeIcon icon={faEnvelopeSquare} size={"sm"} />
                  </a>
            </div>
          </nav>
        </div>
      </header>
      <div className="underHeader fullHeight d-flex justify-content-center align-items-center">
        <div className="intro text-center rounded my-0 d-flex flex-column
          justify-content-center align-items-center" ref={el => {animBoxHead = el}}>
          <h1>Hi. My name is Victor </h1>
          <img src={myface} alt="my face memoji" width="200px"/>
          <p className="text-white"><u><strong>Scroll for more</strong></u></p>
        </div>
      </div>
      <main role="main">
        <div className="fullHeight d-flex align-items-center justify-content-center myTech">
          <div className="jumbotron p-3 p-md-5 rounded bg-dark text-white">
            <div className="row">
              <div className="col-7">
                  <h1>Technologies I use</h1>
              </div>
              <div className="col-5">
                <img></img>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="jumbotron bg-warning fullHeight" id={"projects"}></div>
      <footer className="text-center text-secondary py-3"><span>&#169;</span>2020 Victor</footer>
    </React.Fragment>
  );
}