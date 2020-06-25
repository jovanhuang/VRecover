import React from "react";
import "./calculator.css";
import "../../App.css";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import QuestionHandler from "./Questions"

const Calculator = (props) => {
    return (
        <div>
            <div className="col-12 py-5">
                <h2>Recovery Score Calculator</h2>
                <h4>Fill out the following information to know your Recovery Score</h4>
                <hr />
                <QuestionHandler userid={props.userid} />
            </div>
        </div>
    )
}

export default Calculator;