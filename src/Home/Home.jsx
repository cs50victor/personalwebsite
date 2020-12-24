import React, {Fragment} from "react";
import "twin.macro";
import styled from "styled-components";
//-
import {MarkEmailRead} from "@styled-icons/material-twotone";
import {ArrowUpRight,ArrowDownShort} from "@styled-icons/bootstrap";
import {Github,Linkedin} from "@styled-icons/boxicons-logos";

//----------------Components----------------
import { Section, Divider , Project, Footer} from "../shared/components";
import Layout from "../shared/Layout/Layout.jsx";
//--------------Assets----------------------
import myface from "../Assets/images/face.png";
import resume from "../Assets/Victor Atasie's Resume.pdf";
import tudors from "../Assets/gifs/tudors.gif";
import save from "../Assets/gifs/save.gif";
import jokes from "../Assets/gifs/jokes.gif";
import paint from "../Assets/gifs/paint.gif";
import vm from "../Assets/images/vm.png";
import forward from "../Assets/images/forward.png";
import bye from "../Assets/images/bye.png";


const About = styled(Section)`
  padding:0;
  overflow:hidden;
  img {
    margin: 0 auto;
    width: 41.79vh;
    height:45vh;
  }
  min-width:100vw !important;
`;

const Description = styled.p`
  @media(max-width: 767px) {
    max-width:85vw;
  }
  @media(max-width: 767px){
    font-size:17.5px!important;
  }
  @media(max-width: 326px){
    font-size:14px!important;
  }
`;

const Home = () => {

  return (
    <Fragment>
      <Layout>
        <About id="aboutMe" tw="w-screen!">
          <div tw="flex 
            flex-col 
            h-full 
            justify-center 
            items-center 

            overflow-hidden
            mx-auto
            "
          >
            <div>
              <div>
                <h1>
                  <p tw="font-bold text-2xl ">Hi, I'm </p>
                  <div tw="text-5xl md:text-6xl font-extrabold">
                    <strong tw="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                      Victor
                    </strong>
                  </div>
                </h1>
                <Description tw="md:max-w-xl md:text-xl font-bold md:font-bold text-base">
                  I'm a software developer and computer science major based in West
                  Virginia. I enjoy designing and building software that makes
                  life fun and easier.
                </Description>
              </div>
              <img 
                src={myface} 
                alt="my face memoji" 
                draggable="false" 
              />
            </div>
            <button
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              tw="px-4 
              py-1 
              text-2xl
              text-gray-900 
              font-semibold 
              rounded-full border border-purple-500
              hover:text-white hover:bg-purple-600 
              hover:border-transparent focus:outline-none 
              focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Resume
            </button>
          </div>
        </About>
        <Divider>
          <img 
          tw="absolute left-0 w-1/2"
          src={forward} 
          alt="scroll forward hand"/>
          <h2>Selected <br/>Projects</h2>
        </Divider>
        <Section tw="flex-row" id="projects">
          <Project
            title="Video Downloader"
            image={save}
            description="An online video downloader that allows you to save videos from several social media platforms to your device."
            type="Website"
            github="https://github.com/cs50victor/easiersave"
            url="https://easiersave.com/"
          />
          <Project
            title="Restaurant Site"
            image={tudors}
            description="A redesign of tudorsbiscuitworld.com with CRUD functionality."
            type="Website"
            github="https://github.com/CSWebDev2020/tudors"
            url="https://tudorsrestaurant.herokuapp.com"
          />
          <Project
            title="Virtual Machine"
            image={vm}
            description="A Virtual Machine translator programmed in  C"
            type="Website"
            github="https://github.com/cs50victor/nandToTetris"
          />
          <Project
            title="Dad Jokes"
            image={jokes}
            description="A Gatsbyjs site that displays dad jokes gotten from an api. Designed with some 3D."
            type="Website"
            github="https://github.com/cs50victor/dadjokes"
            url="https://dadjokes3d.netlify.app/"
          />
          <Project
            title="Digit Predictor"
            image={paint}
            description="A simple paint application that allows you to draw images and predict your hand-drawn digits."
            type="Python Gui"
            github="https://github.com/cs50victor/cspaint"
          />
        </Section>
        <Divider >
          <img 
            tw="absolute top-1/4 w-full left-0 align-text-top"
            src={bye} 
            alt="scroll forward hand"/>
          <h2 >Let's <br/>Talk</h2>
        </Divider>
        <Section id="contact">
            <h3 tw="text-4xl font-semibold underline">Contact Me</h3>
            <br/>
            <a
              href="mailto:atasiev10@mycu.concord.edu"
              target="_top"
              tw="mt-5 text-lg md:text-3xl font-semibold hover:underline"
            >
              
              <strong tw="text-yellow-800 hover:(text-green-800)">
                <MarkEmailRead size="80px"/>
              </strong>
              <br />
              atasiev10@mycu.concord.edu <ArrowUpRight size="20px"/>
            </a>
            <br tw="mb-10"/>
            <a
              href="https://www.linkedin.com/in/victoratasie1/" 
              target="_blank"
              rel="noopener noreferrer" 
              tw="flex 
                justify-center 
                items-end uppercase 
                text-xl 
                align-baseline
                mb-5 
                font-medium
                hover:underline
                focus:animate-bounce
              ">
              <Linkedin size="35px"/>[Linkedin]<ArrowUpRight size="20px"/>
            </a>
            <br/>
            <a 
              href="https://github.com/cs50victor" 
              target="_blank"
              rel="noopener noreferrer" 
              tw="
                uppercase
                text-xl 
                inline-block 
                align-middle 
                font-medium
                hover:underline
                focus:animate-bounce
              ">
              <Github size="30px"/> [GitHub] <ArrowUpRight size="20px"/>
            </a>
            <br />
        </Section>
        {/**<section className="projects center" id="projects">
            <div className="justify-content-md-center">
                  <h2>SELECTED PROJECTS</h2>
            </div>
            <div className="tiles_div">
              <ProjectTile heading="Video Downloader"
                          type="Website" 
                          image={video} 
                          name="Easier Save" 
                          tools="Heroku, Gatsbyjs/React, Express, Bootstrap, Rest API and Sass " 
                          modalGIF={elon}
                          description="A social media video downloader and progressive web app. " 
                          link="https://easiersave.com" 
                          github="https://github.com/cs50victor/easiersave"
              />
              <ProjectTile heading="Breakfast Restaurant"
                          type="Website" 
                          image={tudorsIcon} 
                          name="Tudor's Restaurant" 
                          tools="HTML, CSS, Javascript, MYSQL & PHP." 
                          modalGIF={elon}
                          description="Website redesign for Tudor's Biscuit World http://tudorsbiscuitworld.com/" 
                          link="https://tudors.netlify.app/" 
                          github="https://github.com/CSWebDev2020/tudors"
              />
              <ProjectTile heading="Virtual Machine"
                          type="Source Code" 
                          image={vm} 
                          name="A Simple Virtual Machine" 
                          tools="C, Assembly Language, HDL." 
                          modalGIF={elon}
                          description="Built a full-scale general-purpose computer system (hardware + software) from the ground up." 
                          link="https://github.com/cs50victor/nandToTetris" 
                          github="https://github.com/cs50victor/nandToTetris"
              />
              <ProjectTile heading="Quiz App"
                          type="Website" 
                          image={quiz} 
                          name="Simple Quiz App" 
                          tools="HTML, SASS, React." 
                          modalGIF={elon}
                          description="A simple quiz web app using React and a simple API" 
                          link="simpledemoquiz.netlify.app" 
                          github="https://github.com/cs50victor/quizApp"
              />
              <ProjectTile heading="Dad Jokes"
                          type="Website" 
                          image={dad} 
                          name="Dad Jokes 15" 
                          tools="Gatsbyjs/React, Bootstrap, Express, GraphQL, Heroku and Sass." 
                          modalGIF={elon}
                          description="A simple website that fetches Dad jokes from an API every 15seconds using graphql. " 
                          link="https://dad-jokes-15.netlify.app/" 
                          github="https://github.com/cs50victor/dadjokes"
              />
              <ProjectTile heading="TicTacToe AI"
                          type="Website" 
                          image={tictactoe} 
                          name="Unbeatable Tic Tac Toe AI" 
                          tools="HTML, SASS, Javascript & Bootstrap." 
                          modalGIF={elon}
                          description="An unbeatable Tic Tac Toe bot / competitor using the MiniMax Algorithm." 
                          link="https://ai-tictactoe.netlify.app/" 
                          github="https://github.com/cs50victor/AI-TicTacToe"
              />           
            </div>
          </section>**/
        }
      </Layout>
      <Footer>
          <div >
            SCROLL DOWN TO NAVIGATE
            <ArrowDownShort size="25px" tw="animate-bounce"/>
          </div>
        </Footer>
    </Fragment>
  );
};

export default Home;
