import React, { useRef, useEffect, useState } from "react";
//-------Icons(font awesome)---------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin ,faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faAngleDown } from "@fortawesome/fontawesome-free-solid";
//------Bootstrap and SASS------------------
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.scss";
//----------Cool Animations and Preload-----------------------
import {gsap} from "gsap";

import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
//--------------Assets----------------------
import logo from "./Assets/new logo.png";
import myface from "./Assets/face.png";
import resume from "./Assets/Victor Atasie's Resume.pdf";
import css from "./Assets/techSvg/css-3.svg";
import html from "./Assets/techSvg/html5.svg";
import sass from "./Assets/techSvg/sass.svg";
import javascript from "./Assets/techSvg/javascript.svg";
import python from "./Assets/techSvg/python.svg";
import jquery from "./Assets/techSvg/jquery.svg";
import react from "./Assets/techSvg/react.svg";
import node from "./Assets/techSvg/nodejs.svg";
import express from "./Assets/techSvg/express.svg";
import git from "./Assets/techSvg/git.svg";
import webpack from "./Assets/techSvg/webpack.svg";
import netlify from "./Assets/techSvg/netlify.svg";
import wordpress from "./Assets/techSvg/wordpress.svg";
import figma from "./Assets/techSvg/figma.svg";
import bootstrapStudio from "./Assets/techSvg/bootstrapstudio.png";
import photoshop from "./Assets/techSvg/photoshop.svg";
import elon from "./Assets/elon.png";
import Abi from "./Assets/abis.png";

ScrollMagicPluginGsap(ScrollMagic, gsap);

export default function App(){
  const [isIconRotated, setIsIconRotated] = useState(false);

  let introBox = useRef(null);
  let aboutMe = useRef(null);
  let memojiText = useRef(null);

  //!-- rotate Header Menu Icon State
  const rotateMenuIcon =()=>{
    setIsIconRotated(isIconRotated => !isIconRotated)
  }
  //!--Current Year, GSAP and Scroll Magic--------
  useEffect(()=>{ 
    let controller= new ScrollMagic.Controller();
    //!---ScrollMagic and Gsap-----
    new ScrollMagic.Scene({
      triggerElement: introBox,
      triggerHook:"onLeave",
      duration:"100%",
    })
    .setPin(introBox, {pushFollowers: false})
    .setTween(gsap.to(memojiText,{opacity: 0, duration: 2, ease: "power3.out"}))
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: aboutMe,
      triggerHook:"onLeave",
      duration:"90%",
    })
    .setPin(aboutMe, {pushFollowers: false})
    .setTween(gsap.to(aboutMe,{opacity: 0, duration: 2, ease: "power3.out"}))
    .addTo(controller);

    //*--Current Year in Footer---------
    const yearEl = document.querySelector(".currentYear");
    const date = new Date();
    const year = date.getFullYear();
    yearEl.innerText = year;
  },[]);

  return (
    <React.Fragment>
      <header className="fixed-top appleBlur">
        <div className="container">
          <nav className="navbar d-flex navbar-expand-md justify-content-between">
            <a className="navbar-brand" href="./">
              <img src={logo} alt="logo"  className="img-thumbnail" width="40px" height="40px"/>
            </a>
            <button className="navbar-toggler" type="button" 
               onClick={rotateMenuIcon}
               data-toggle="collapse" data-target="#menu">
              <FontAwesomeIcon icon={faAngleDown} 
                color={"white"} size={"lg"} className={isIconRotated ? "menuRotate" : "menuOriginal"} />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="menu">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <a href="#projects" className="nav-link">Projects</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.linkedin.com/in/victoratasie1/" target="_blank"
                     rel="noopener noreferrer" className="nav-link">
                    <FontAwesomeIcon icon={faLinkedin} size={"lg"}/>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/cs50victor" target="_blank"
                    rel="noopener noreferrer" className="nav-link">
                    <FontAwesomeIcon icon={faGithub} size={"lg"}/>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="mailto:atasiev10@mycu.concord.edu" target="_top" className="nav-link">
                    <FontAwesomeIcon icon={faEnvelope} size={"lg"} />                    
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="content-wrapper"role="main">
        <div className="introBox" 
         ref={el =>{introBox = el}} >
          <div className="intro text-center my-0 mt-2 centerDown">
            <div ref={el => {memojiText = el}} className="appear1 mt-1">
              <h1>
                <small className="lead">Hi, my name is</small>
                  <br/>
                 <strong>Victor Atasie</strong>
              </h1>
              <img src={myface} alt="my face memoji"  className="img-fluid"/>
              <br/>
              <a href={resume} className="btn btn-primary mb-2" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <br/>
              <a className="text-white" href="#moreMe">
                <strong>Scroll for more</strong>
                <br/>
                <FontAwesomeIcon icon={faAngleDown} color={"white"} />
              </a>
            </div>
          </div>
        </div>
        <div className="moreIntro center px-5"
          ref={el => {aboutMe = el}} id="moreMe">
            <div className="centerLittleText">
              <p> 
                I'm a web designer/developer and aspiring software engineer 
                 <br/>
                 based in Athens, West Virginia.
                <br/> 
                  I enjoy solving problems and
                  <br/>
                  learning new things.
                <br/>
                Here are a few technologies, platforms & languages I currently use:
              </p>
            </div>
        </div>
        <div className="techs pb-5">
          <div className="container">     
            <div className="row flex m-1">
              <div className="col-12 mb-4">
                <h5 className="mt-3 btn btn-outline-primary">Programming Languages</h5>
                <div className="box mt-5">
                  <img className="img-thumbnail" src={html} alt="html" />
                  <img className="img-thumbnail" src={css} alt="css"/>
                  <img className="img-thumbnail" src={sass} alt="sass"/>
                  <img className="img-thumbnail" src={javascript} alt="javascript"/>
                  <img className="img-thumbnail" src={python} alt="python"/>
                </div>  
                <small className="mt-5">HTML, CSS/SASS, JAVASCRIPT, python</small>            
              </div>
              <div className="col-12 mb-4">
                <h5 className="mt-3 btn btn-outline-primary ">Libraries and Frameworks</h5> 
                <div className="box mt-5">
                  <img className="img-thumbnail" src={jquery} alt="jquery"/>
                  <img className="img-thumbnail" src={react} alt="react"/>
                  <img className="img-thumbnail" src={node} alt="node"/>
                  <img className="img-thumbnail" src={express} alt="express"/>
                </div> 
                <small className="mt-5">jquery,react, Node.js, Express</small>            
              </div>
              <div className="col-12 mb-4">
                <h5 className="my-3 btn btn-outline-primary">Tools & Platforms</h5>
                <div className="box mt-5">
                  <img className="img-thumbnail" src={git} alt="git"/>
                  <img className="img-thumbnail" src={webpack} alt="webpack"/>
                  <img className="img-thumbnail" src={netlify} alt="netlify"/>
                  <img className="img-thumbnail" src={wordpress} alt="wordpress"/>
                </div>
                <small className="mt-5">Git, Webpack, Netlify, Wordpress</small>            
              </div>
              <div className="col-12 mb-4">
                <h5 className="my-3 btn btn-outline-primary">Design</h5>
                <div className="box mt-5">
                  <img className="img-thumbnail" src={figma} alt="figma"/>
                  <img className="img-thumbnail" src={bootstrapStudio} alt="bootstrap studio"/>
                  <img className="img-thumbnail" src={photoshop} alt="photoshop"/>
                </div>
                <small className="mt-5">Figma, Bootstrap Studio, Photoshop</small>            
              </div>
            </div>
          </div>
        </div>
        <div className="projects container my-5 px-5" id="projects">
          <hr/>
          <h3 className="ml-1">
           <kbd>Projects</kbd>
          </h3>
          <br/>
          <div className="row mb-5 pb-md-4 align-items-center">
            <div className="col-md-5">
              <a href="https://elonautomobiles.netlify.app"
                rel="noopener noreferrer" target="_blank">
                <img className="img-fluid rounded mt-3 mx-auto mb-5"
                  src={elon}
                  alt="Elon Automobiles screenshot" loading="lazy" width="700" height="500">
                </img>
              </a>
            </div>
            <div className="col-md-7 pl-md-5">
              <h4>Bootstrap Landing Page</h4>
              <p className="lead">
                Name: Elon Automobiles
                <br/>
                Made with : HTML, CSS & Bootstrap.
              </p>
              <p>
                A simple landing page for a fictional car company.
              </p>
              <a href="https://elonautomobiles.netlify.app/" className="btn btn-md btn-outline-primary mb-3 mr-2"
               rel="noopener noreferrer" target="_blank">
                Live Website
              </a>
              <a href="https://github.com/cs50victor/elonautomobiles" 
                className="btn btn-md btn-outline-primary mb-3 mr-2"
                 rel="noopener noreferrer" target="_blank">
                Source code on Github
              </a>
            </div>
          </div>
          <div className="row mb-5 pb-md-4 align-items-center">
            <div className="col-md-5">
              <a href="https://abisorganics.com" 
                 rel="noopener noreferrer" target="_blank">
                  <img className="img-fluid rounded mt-3 mx-auto mb-5" src={Abi} 
                  alt="Abi's Organics Screenshot" loading="lazy" width="700" height="500"></img> 
              </a>
            </div>
            <div className="col-md-7 pl-md-5">
              <h4>Wordpress E-Commerce Website</h4>
              <p className="lead">
                Name : Abi's Organics.
                <br/>
                Made with : Wordpress.
              </p>
              <p>
                A simple CDB E-Commerce wordpress website
              </p>
              <a href="https://abisorganics.com" 
                className="btn btn-md btn-outline-primary mb-3 mr-2"
                 rel="noopener noreferrer" target="_blank">
                   Live Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-white py-4 mt-5"><span>&#169;</span><span className="currentYear"></span> | Designed and Built by Victor Atasie</footer>
    </React.Fragment>
  );
}

//for home page css
/*.preloader> .precontain > .eye:after {
  content: "";
  box-sizing: border-box;
  border: 14px solid #117864;
  background-color: transparent;
  width: 65px;
  height: 65px;
  position: absolute;
  z-index:-2;
  top: 60px;
  left: 30px;
  border-radius: 100%;
  align-self: center;
  justify-content: center;
  box-shadow: 0px 0px 13px 7px rgba(0, 0, 0, 0.7) inset;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  -mozkit-filter: blur(5px);
  animation: move-eye-skew 4s ease-out infinite;
  -webkit-animation:move-eye-skew 4s ease-out infinite;
  -moz-animation: move-eye-skew 4s ease-out infinite;
}
*/