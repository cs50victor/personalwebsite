import React, { useRef, useEffect } from 'react';
//-------Icons(font awesome)---------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin ,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faAngleDown } from "@fortawesome/fontawesome-free-solid";
//------Bootstrap and SASS------------------
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';

//----------Cool Animations-----------------------
import {TweenMax, Power3} from "gsap";
import ScrollMagic from "scrollmagic";
//--------------Assets----------------------
import myface from "./images/face.png";


export default function App(){
  let introBox = useRef(null);
  let memojiText = useRef(null);
  let animBoxHead = useRef(null);
  let moreDetails = useRef(null);
  let projectsBox = useRef(null);
  const controller = new ScrollMagic.Controller();

  //--GSAP and Scroll Magic--------
  useEffect(()=>{
    TweenMax.to(memojiText ,5,{opacity: 1,y: -70,ease: Power3.easeOut});
  })
  const menuToggle =()=> {
    return console.log("Great Shot!");
  }
  return (
    <React.Fragment>
      <header className="fixed-top">
        <div className="container">
          <nav className="navbar d-flex navbar-expand-md justify-content-between">
            <a className="navbar-brand" href="./">Victor Atasie</a>
            <button className="navbar-toggler" type="button" onClick={menuToggle}
               data-toggle="collapse" data-target="#menu">
              <FontAwesomeIcon icon={faAngleDown} color={"white"} size={"lg"}/>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="menu">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <a href="#projects" className="nav-link">Projects</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.linkedin.com/in/victoratasie1/" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FontAwesomeIcon icon={faLinkedin} size={"lg"}/>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/cs50victor" target="_blank"rel="noopener noreferrer" className="nav-link">
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
        <div className="fullHeight d-flex justify-content-center align-items-center" 
         ref={el =>{introBox = el}} >
          <div className="intro text-center my-0 d-flex flex-column
            justify-content-center align-items-center" ref={el =>{animBoxHead = el}} >
            <div ref={el => {memojiText = el}} className="appear1">
              <h1>Hi. My name is Victor </h1>
              <img src={myface} alt="my face memoji" width="200px"/>
              <br/>
              <a className="text-white" href="#techs">
                <strong>Scroll for more</strong>
                <br/>
                <FontAwesomeIcon icon={faAngleDown} color={"white"} />
              </a>
            </div>
          </div>
        </div>
        <div className="fullHeight d-flex align-items-center justify-content-center"
          ref={el => {moreDetails = el}}>
          <div className="jumbotron p-3 mx-3 rounded bg-dark text-white">
            <div className="row">
              <div className="col-7">
                  <h1>Technologies I use</h1>
              </div>
              <div className="col-5">
                <img src={myface} width={"100px"}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="" id={"projects"}
          ref={el => {projectsBox = el}}>
        </div>
      </div>
      <footer className="text-center text-secondary py-4"><span>&#169;</span> 2020 | Designed and Built by Victor Atasie</footer>
    </React.Fragment>
  );
}