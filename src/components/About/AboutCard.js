import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, my name is <span className="purple">Ankur Nanaware</span>, 
            from <span className="purple">Raigad, Maharashtra.</span>
            <br />
            I am an <span className="purple">Associate IT Consultant</span> at 
            <span className="purple"> ITC Infotech</span>, actively working towards building my career as a 
            <span className="purple"> Python & Django Backend Developer</span>.
            <br />
            <br />
            I have completed my Bachelor’s Degree in 
            <span className="purple"> Electronics and Telecommunication Engineering </span> 
            from JSPM's Jayawantrao Sawant College of Engineering, Pune.
            <br />
            <br />
            I am currently focused on strengthening my backend skills using 
            <span className="purple"> Python, Django, Django REST Framework</span>, 
            and working with databases, APIs, and real-world project architectures.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring backend system design
            </li>

            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling & bike riding
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
