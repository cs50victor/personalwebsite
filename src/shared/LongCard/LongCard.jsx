import React from "react";
import {Card} from "react-bootstrap";
import "./longCard.scss"

const LongCard =(props)=>{
    return(
        <Card className="longCard">
            <Card.Body>
                {props.children}
            </Card.Body>
            <Card.Title className="text-muted">{props.title} </Card.Title>
        </Card>
    );
}
export default LongCard;