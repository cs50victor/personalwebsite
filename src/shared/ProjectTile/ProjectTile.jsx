import React, {useState} from "react";
import {Card, Modal}from "react-bootstrap";
import "./projectTile.scss"

const ProjectTile =(props)=>{
    const [modalShow, setModalShow] = useState(false);

    return(
        <React.Fragment>
            <button className="tile" onClick={() => setModalShow(true)} data-target="#learnMore" data-toggle="modal" >
                <Card className="text-center">
                    <Card.Body>
                        <Card.Text>
                            <small>{props.type}</small>
                        </Card.Text>
                        <img src={props.image}
                            alt={props.heading}/>
                        <Card.Title>{props.heading}</Card.Title>
                    </Card.Body>
                </Card>
            </button>

            {/* Modal for more details on project */}

            <Modal show={modalShow} onHide={() => setModalShow(false)} size="fullscreen" fade={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="content">
                        <a href={props.link} rel="noopener noreferrer" target="_blank" >
                            <img className="img-fluid"
                                src={props.modalGIF}
                                alt={props.heading}
                                loading="lazy"
                                draggable="false">
                            </img>
                            <br/>
                            {/*<small>Click on image to go to website</small>*/}
                        </a>
                        <div className="col-lg-7 mt-5 mb-3">
                                <p className="h4">
                                    Name: {props.name}
                                    <br/>
                                    Made with : {props.tools}
                                </p>
                                <p>
                                    {props.description}
                                </p>
                                <a href={props.link}
                                    className="btn btn-md btn-outline-primary mb-3 mr-2"
                                    rel="noopener noreferrer" target="_blank">
                                    View
                                </a>
                                <a href={props.github}
                                    className="btn btn-md btn-outline-primary mb-3 mr-2"
                                    rel="noopener noreferrer" target="_blank">
                                    Source code on Github
                                </a>
                        </div>
                       
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}
export default ProjectTile;