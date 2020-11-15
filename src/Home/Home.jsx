import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

//----------------Components----------------
import Layout from "../shared/Layout/Layout.jsx";
import LongCard from "../shared/LongCard/LongCard.jsx";
import ProjectTile from "../shared/ProjectTile/ProjectTile.jsx";
import { FlickingEvent, SelectEvent, ChangeEvent, NeedPanelEvent } from "@egjs/flicking";
import Flicking from "@egjs/react-flicking";
//-----------------SCSS---------------------
import "./home.scss";
//--------------Assets----------------------
import myface from "../Assets/images/face.png";
import resume from "../Assets/Victor Atasie's Resume.pdf";
import scrollDown from "../Assets/images/scroll.gif";
import css from "../Assets/icons/css-3.svg";
import html from "../Assets/icons/html5.svg";
import sass from "../Assets/icons/sass.svg";
import javascript from "../Assets/icons/javascript.svg";
import python from "../Assets/icons/python.svg";
import MySql from "../Assets/icons/mysql.svg";
import php from "../Assets/icons/php.svg";
import C from "../Assets/icons/c.svg";
import jquery from "../Assets/icons/jquery.svg";
import react from "../Assets/icons/react.svg";
import node from "../Assets/icons/nodejs.svg";
import express from "../Assets/icons/express.svg";
import git from "../Assets/icons/git.svg";
import gatsby from "../Assets/icons/gatsbyjs.svg";
import figma from "../Assets/icons/figma.svg";
import photoshop from "../Assets/icons/photoshop.svg";
import elon from "../Assets/images/elon.png";


export default function Home(){

  return (
      <main>
        <section className="introBox">
          <Container className="intro" fluid>
            <div className="magazine">
              <div className="description">
                  <h1>
                    <small>HI, I'M</small>
                    <br/>
                    <strong>Victor</strong>
                  </h1>
                  <p>
                    A  software developer and computer science major
                      based in West Virginia.
                      I enjoy designing and building software that makes life fun and easier.
                  </p>
                  <a href={resume} className="btn outline-dark desktop" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
              </div>
              <img className="face"src={myface} alt="my face memoji"  draggable="false"/>
            </div>
            <a href={resume} className="btn outline-dark mobile" target="_blank" rel="noopener noreferrer">
                  Resume
            </a>
            <img className="scroll" src={scrollDown} alt="SCROLL DOWN" draggable="false"/>
          </Container>
        </section>
        <section className="tools">
            <Container className="justify-content-md-center" fluid>
                <h2>TOOLS</h2>
                <hr/>
                <br/>
                <br/>
                <Flicking className="slider_width" collectStatistics = {false} gap = {15} zIndex = {50}
                     autoResize = {true} overflow = {true}>
                    <LongCard title="Programming Languages">
                        <div className="grayCircle"><img src={html} alt="html"/></div>
                        <div className="grayCircle"><img src={css} alt="css"/></div>
                        <div className="grayCircle"><img src={sass} alt="sass"/></div>
                        <div className="grayCircle"><img src={python} alt="python"/></div>
                        <div className="grayCircle"><img src={javascript} alt="javascript"/></div>
                        <div className="grayCircle"><img src={php} alt="php"/></div>
                        <div className="grayCircle"><img src={C} alt="C"/></div>
                        <div className="grayCircle"><img src={MySql} alt="MySql"/></div>
                    </LongCard>
                    <LongCard title="Libraries,Frameworks & Platforms">
                        <div className="grayCircle"><img src={gatsby} alt="Gatsbyjs"/></div>
                        <div className="grayCircle"><img src={jquery} alt="jquery"/></div>
                        <div className="grayCircle"><img src={react} alt="react"/></div>
                        <div className="grayCircle"><img src={node} alt="node"/></div>
                        <div className="grayCircle"><img src={express} alt="express"/></div>
                        <div className="grayCircle"><img src={git} alt="git"/></div>
                    </LongCard>
                    <LongCard title="Design">
                        <div className="grayCircle"><img src={figma} alt="figma"/></div>
                        <div className="grayCircle"><img src={photoshop} alt="photoshop"/></div>
                    </LongCard>
                </Flicking>
            </Container>
        </section>
        <section className="projects" id="projects">
          <Container className="justify-content-md-center" fluid>
                <h2>SELECTED PROJECTS</h2>
          </Container>
          <div className="tiles_container">
            <ProjectTile heading="Bootstrap Landing Page"
                         type="Website" 
                         image={elon} 
                         name="Elon Automobiles" 
                         tools="HTML, CSS & Bootstrap." 
                         modalGIF={elon}
                         description="A simple landing page for a fictional car company." 
                         link="https://elonautomobiles.netlify.app/" 
                         github="https://github.com/cs50victor/elonautomobiles"/>
          </div>
        </section>
      </main>
  );
}

