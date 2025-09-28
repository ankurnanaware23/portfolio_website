import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/boyavtar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub, AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              With over <b className="purple">1+ year of experience</b> as an Associate IT Consultant at ITC Infotech, I'm passionate about building clean, scalable web applications.
              <br />
              <br />I am highly proficient in core web technologies and backend frameworks like
              <i>
                  <b className="purple"> Python (Django, Django REST Framework), JavaScript, ReactJS, and SQL. </b>
              </i>
              <br />
              <br />
              My primary focus is on developing robust, end-to-end solutions, specializing in the intersection of
              <i>
                  <b className="purple"> modern Python backends and efficient React frontends.</b>
              </i>
              <br />
              <br />
              I continuously apply my expertise to designing and integrating
              <i>
                  <b className="purple"> REST APIs and implementing cloud solutions on Microsoft Azure.</b>
              </i>
          </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ankurnanaware23"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankur-nanaware-47757a214/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li> 

              <li className="social-icons">
                <a
                  href="mailto:abhinanaware23@gmail.com?subject=Hello%20Ankur&body=I%20would%20like%20to%20connect%20with%20you."
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
