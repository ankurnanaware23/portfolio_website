import React from "react";
import { Col, Row } from "react-bootstrap";
import { TiHtml5 } from "react-icons/ti";
import {
  DiJavascript1,
  DiReact,
  DiCss3,
  DiPython,
  DiGit,
  DiDjango, 
  DiDatabase,
} from "react-icons/di";
import {
  SiMicrosoftazure, 
  SiBootstrap, 
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* FRONTEND & BASICS */}
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>

      {/* BACKEND & DATABASE */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase /> {/* SQL / Database Concepts */}
      </Col>

      {/* DEVOPS & TOOLS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
    </Row>
  );
}

export default Techstack;