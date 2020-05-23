import React, { useRef, useEffect, useState } from 'react';
//-------Icons(font awesome)---------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin ,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faAngleDown } from "@fortawesome/fontawesome-free-solid";
//------Bootstrap and SASS------------------
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';
//----------Cool Animations and Preload-----------------------
import {TweenLite, TimelineLite, Power3} from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
//--------------Assets----------------------
import css from "./Assets/techSvg/css-3.svg"
import myface from "./Assets/face.png";
import resume from "./Assets/Victor Atasie's Resume.pdf";
import Abi from "./Assets/abis.png";

ScrollMagicPluginGsap(ScrollMagic, TweenLite, TimelineLite);
export default function App(){
  const [isIconRotated, setIsIconRotated] = useState(false);
  
  let controller= new ScrollMagic.Controller();

  let introBox = useRef(null);
  let aboutMe = useRef(null);
  let memojiText = useRef(null);
  let animBoxHead = useRef(null);
  let techDiv = useRef(null);
  let projectsBox = useRef(null);

  //!-- rotate Header Menu Icon State
  const rotateMenuIcon =()=>{
    setIsIconRotated(isIconRotated => !isIconRotated)
  }
  //!--Current Year, GSAP and Scroll Magic--------
  useEffect(()=>{ 
    //!-- Header color and blur change on scroll
    const header = document.querySelector(".fixed-top");
    window.onscroll = () => {
      if(window.scrollY >= 50.663) header.classList.add("appleBlur"); 
      else header.classList.remove("appleBlur");
    };
    //!--GSAP, TweenLite----
    let tl1 = new TimelineLite();
    tl1.to(
      introBox, 1, {backgroundColor: "black",ease: Power3.easeOut}
    ).to(
      memojiText, 1, {opacity: 0, ease: Power3.easeNone}, "-= 10"
    ).to(
      aboutMe, 1, {backgroundColor: "black",ease: Power3.easeOut}, "+=2"
    );

    //!---ScrollMagic-----
    let scene1 = new ScrollMagic.Scene({
      triggerElement: introBox,
      triggerHook:"onLeave",
      duration:"120%",
    })
    .setPin(introBox, {pushFollowers: false})
    .setTween(tl1)
    .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
      triggerElement: aboutMe,
      triggerHook:"onLeave",
      duration:"120%",
    })
    .setPin(aboutMe, {pushFollowers: false})
    .addTo(controller)

    

    //*--Current Year in Footer---------
    const yearEl = document.querySelector(".currentYear");
    const date = new Date();
    const year = date.getFullYear();
    yearEl.innerText = year;
  },[]);

  return (
    <React.Fragment>
      <header className={isIconRotated ? "appleBlur fixed-top" : "fixed-top"}>
        <div className="container">
          <nav className="navbar d-flex navbar-expand-md justify-content-between">
            <a className="navbar-brand" href="./">Victor Atasie</a>
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
          <div className="intro text-center my-0 centerDown" ref={el =>{animBoxHead = el}} >
            <div ref={el => {memojiText = el}} className="appear1 mt-1">
              <h1><small className="lead">Hi, my name is</small>
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
                I'm a web designer and developer schooling in Athens, West Virginia.
                <br/> 
                I have a passion for web design and love to create for web 
                and mobile devices. Always up for learning new things.
              </p>
            </div>
        </div>
        <div className="techs pb-5" ref={el => {techDiv = el}}>
          <div className="container">     
            <div className="row flex mx-2">
              <div className="col-12">
                    <div className="box mt-5">
                      <img className="img-thumbnail bg-white" src={css} alt="test"/>
                      <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                      <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                      <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                      <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    </div>     
                    <h5 className="mt-3">Programming Languages</h5> 
                    <small>CSS</small>            
              </div>
              <div className="col-12">
                  <div className="box mt-5">
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                  </div>
                  <h5 className="my-3">Libraries and frameworks</h5>
              </div>
              <div className="col-12">
                  <div className="box mt-5">
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                  </div>
                  <h5 className="my-3">Tools & Platforms</h5>
              </div>
              <div className="col-12">
                  <div className="box mt-5">
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                    <img className="img-fluid" src="//placehold.it/150x180" alt="test"/>
                  </div>
                  <h5 className="my-3">Design</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="projects container my-5 px-5" id="projects" ref={el => {projectsBox = el}}>
          <hr/>
          <h3 className="ml-1">
           <kbd>Projects</kbd>
          </h3>
          <br/>
          <div className="row mb-5 pb-md-4 align-items-center">
            <div className="col-md-5">
              <img className="img-fluid mt-3 mx-auto mb-5"
                src="https://images.pexels.com/photos/2101839/pexels-photo-2101839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Random" loading="lazy" width="700" height="500"></img>
            </div>
            <div className="col-md-7 pl-md-5">
              <h2>Official Themes</h2>
              <p className="lead font-weight-normal">
                Themes are built on Bootstrap as their own extended frameworks, 
                rich with new components and plugins, documentation, and powerful build tools.
              </p>
              <p>
                Themes are built on Bootstrap as their own extended frameworks, 
                rich with new components and plugins, documentation, and powerful build tools.
              </p>
              <a href="#" className="btn btn-md btn-outline-primary mb-3 mr-2">Live Demo</a>
              <a href="#" className="btn btn-md btn-outline-primary mb-3 mr-2">Source code on Github</a>
            </div>
          </div>
          <div className="row mb-5 pb-md-4 align-items-center">
            <div className="col-md-5">
              <img className="img-thumbnail mt-3 mx-auto mb-5"
                src={Abi} 
                alt="Abi's Organics Screenshot" loading="lazy" width="700" height="500"></img>
            </div>
            <div className="col-md-7 pl-md-5">
              <h2>Official Themes</h2>
              <p className="lead font-weight-normal">
                Themes are built on Bootstrap as their own extended frameworks, 
                rich with new components and plugins, documentation, and powerful build tools.
              </p>
              <p>
                Themes are built on Bootstrap as their own extended frameworks, 
                rich with new components and plugins, documentation, and powerful build tools.
              </p>
              <a href="#" className="btn btn-md btn-outline-primary mb-3 mr-2">Live Demo</a>
              <a href="#" className="btn btn-md btn-outline-primary mb-3 mr-2">Source code on Github</a>
            </div>
          </div>
          <div className="row mb-5 pb-md-4 align-items-center">
            <div className="col-md-5">
              <img className="img-fluid mt-3 mx-auto mb-5"
                src="https://images.unsplash.com/photo-1588775286394-488d8cf1c8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Random" loading="lazy" width="700" height="500"></img>
            </div>
            <div className="col-md-7 pl-md-5">
              <h2>Official Themes</h2>
              <p className="lead font-weight-normal">
                Themes are built on Bootstrap as their own extended frameworks, 
                rich with new components and plugins, documentation, and powerful build tools.
              </p>
              <p>
                Themes are built on Bootstrap as their own extended frameworks, 
                rich with new components and plugins, documentation, and powerful build tools.
              </p>
              <a href="#" className="btn btn-md btn-outline-primary mb-3 mr-2">Live Demo</a>
              <a href="#" className="btn btn-md btn-outline-primary mb-3 mr-2">Source code on Github</a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-white py-4 mt-5"><span>&#169;</span><span className="currentYear"></span> | Designed and Built by Victor Atasie</footer>
    </React.Fragment>
  );
}