import React, {useState} from "react";
import {Container, Navbar} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin ,faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faAngleDown } from "@fortawesome/fontawesome-free-solid";

import "./layout.scss";

import logo from "../../Assets/images/new logo.png";

const Layout =({children})=>{
    const [isIconRotated, setIsIconRotated] = useState(false);

    const rotateMenuIcon =()=>{
        setIsIconRotated(isIconRotated => !isIconRotated)
    }

    return(
        <React.Fragment>
            <header className="appleBlur">
                <Container>
                    <Navbar className="d-flex navbar-expand-md justify-content-between" expand="lg">
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
                                    <a href="#projects" className="nav-link">projects</a>
                                </li>
                                <span className="disappear">|</span>
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
                    </Navbar>
                </Container>
            </header>
            {children}
            <footer className="my-3">
                <Container>
                    <h2>Let's Talk</h2>
                    <br/>
                    <a href="mailto:atasiev10@mycu.concord.edu" target="_top" className="footer-contact">
                        <FontAwesomeIcon icon={["fas", "at"]} size="3x" />
                        <br/>
                        atasiev10@mycu.concord.edu                    
                    </a>
                    
                    <br/>
                    <br/>
                    <br/>

                    © {new Date().getFullYear()} | Victor Atasie.
                    <br/>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Layout;
