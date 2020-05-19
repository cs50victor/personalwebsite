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
import {Dots} from "react-preloaders";
import {TweenMax, Power3} from "gsap";
import {motion} from "framer-motion";
//--------------Assets----------------------
import myface from "./Assets/face.png";
import resume from "./Assets/Victor Atasie's Resume.pdf";


export default function App(){
  const [isIconRotated, setIsIconRotated] = useState(false);
  const [loading, setLoading] = useState(true);

  let introBox = useRef(null);
  let memojiText = useRef(null);
  let animBoxHead = useRef(null);
  let moreDetails = useRef(null);
  let projectsBox = useRef(null);

  //--GSAP and Scroll Magic--------
  useEffect(()=>{
    setLoading(false);
    TweenMax.to(memojiText ,3,{opacity: 1,y: -70,ease: Power3.easeOut});
  })

  return (
    <React.Fragment>
      <header className="fixed-top">
        <div className="container">
          <nav className="navbar d-flex navbar-expand-md justify-content-between">
            <a className="navbar-brand" href="./">Victor Atasie</a>
            <button className="navbar-toggler" type="button" 
               onClick={() => setIsIconRotated(isIconRotated => !isIconRotated)}
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
        <div className="intro1 center" 
         ref={el =>{introBox = el}} >
          <div className="intro text-center my-0 centerDown" ref={el =>{animBoxHead = el}} >
            <div ref={el => {memojiText = el}} className="appear1 mt-1">
              <h1><small className="lead">Hi, my name is</small>
                  <br/>
                 <strong>Victor Atasie</strong>
              </h1>
              <img src={myface} alt="my face memoji" width="200px"/>
              <br/>
              <a href={resume} class="btn btn-primary mb-2" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <br/>
              <a className="text-white" href="#techs">
                <strong>Scroll for more</strong>
                <br/>
                <FontAwesomeIcon icon={faAngleDown} color={"white"} />
              </a>
            </div>
          </div>
        </div>
        <div className="center moreIntro">
          <p> 
            I'm a web designer / developer based in Toronto, Canada. 
            I have a passion for web design and love to create for web 
            and mobile devices.
          </p>
        </div>
        <div  id="techs" className="container"
          ref={el => {moreDetails = el}}>
          <div class="row">
            <div class="col-4">
              <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item d-flex justify-content-between align-items-center
                  list-group-item-action active" 
                  id="list-home-list" data-toggle="list" href="#list-home" 
                  role="tab" aria-controls="home">
                  Home
                  <span class="badge badge-danger badge-pill">1</span>
                </a>
                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
              </div>
            </div>
            <div class="col-8">
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                  Irure enim occaecat labore 
                  sit qui aliquip reprehenderit amet velit. 
                  Deserunt ullamco ex elit nostrud ut dolore nisi 
                  officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute
                  est cupidatat aliqua labore aute occaecat ea aliquip sunt amet.
                </div>
                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                  Irure enim occaecat labore 
                  sit qui aliquip reprehenderit amet velit. 
                  Deserunt ullamco ex elit nostrud ut dolore nisi 
                  officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute
                  est cupidatat aliqua labore aute occaecat ea aliquip sunt amet.
                </div>
                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                  Irure enim occaecat labore 
                  sit qui aliquip reprehenderit amet velit. 
                  Deserunt ullamco ex elit nostrud ut dolore nisi 
                  officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute
                  est cupidatat aliqua labore aute occaecat ea aliquip sunt amet.
                </div>
                <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                  Irure enim occaecat labore 
                  sit qui aliquip reprehenderit amet velit. 
                  Deserunt ullamco ex elit nostrud ut dolore nisi 
                  officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute
                  est cupidatat aliqua labore aute occaecat ea aliquip sunt amet.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container projects mb-5 px-5" id={"projects"} ref={el => {projectsBox = el}}>
          <hr/>
          <h3 className="ml-5">
           <kbd>Projects</kbd>
          </h3>
          <br/>
          <div className="row mb-5 pb-md-4 align-items-center">
            <div className="col-md-5">
              <img class="img-fluid mt-3 mx-auto mb-5"
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
              <a href="#" className="btn btn-lg btn-outline-primary mb-3">Live Demo</a>
              <a href="#" className="btn btn-lg btn-outline-primary mb-3">Source code on Github</a>
            </div>
          </div>
          <div className="row mb-5 pb-md-4 align-items-center">
            <div className="col-md-5">
              <img class="img-fluid mt-3 mx-auto mb-5"
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
              <a href="#" className="btn btn-lg btn-outline-primary mb-3">Live Demo</a>
              <a href="#" className="btn btn-lg btn-outline-primary mb-3">Source code on Github</a>
            </div>
          </div>
          <div className="row mb-5 pb-md-4 align-items-center">
            <div className="col-md-5">
              <img class="img-fluid mt-3 mx-auto mb-5"
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
              <a href="#" className="btn btn-lg btn-outline-primary mb-3">Live Demo</a>
              <a href="#" className="btn btn-lg btn-outline-primary mb-3">Source code on Github</a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-muted py-4 bg-white"><span>&#169;</span> 2020 | Designed and Built by Victor Atasie</footer>
      <Dots customLoading={loading} background="#000000" color="#ffffff" animation="slide-up" style={{overflow:"hidden"}}/>
    </React.Fragment>
  );
}