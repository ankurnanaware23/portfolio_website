import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Placeholder imports - REPLACE THESE WITH YOUR ACTUAL IMAGE PATHS
import emedicine from "../../Assets/Projects/emedicine.jpg"; 
import restaurant_management from "../../Assets/Projects/rms.jpg"; 
import ecommerce from "../../Assets/Projects/ecommerce.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Full-Stack <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the major applications I've developed, showcasing my Python/Django and React expertise.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* PROJECT 1: Restaurant Management System (RMS) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant_management}
              title="Restaurant Management System (RMS)"
              description="Developed a full-stack operations system to manage dining, takeout, and inventory. Features include a manager dashboard with key metrics (popular dishes), dynamic table layout, and a seamless order submission interface built with ReactJS and a Django REST Framework backend."
              ghLink="[Your RMS GitHub Link Here]"
            />
          </Col>

          {/* PROJECT 2: E-Medicine Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emedicine}
              title="E-Medicine Platform (Full-Stack)"
              description="Built a healthcare platform enabling users to book appointments and order medicines. Designed and implemented secure Django REST APIs for managing users, appointments, and orders, integrated with a dynamic ReactJS front-end. Utilized Django ORM for efficient database operations."
              ghLink="[Your E-Medicine GitHub Link Here]"
            />
          </Col>
          
          {/* PROJECT 3: E-commerce Website (Reframed for Python/Django) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              title="E-commerce Marketplace Website"
              description="Built a comprehensive e-commerce platform with a RESTful API backend using Python/Django. Created normalized SQL tables for products, orders, and users. The responsive ReactJS frontend features dynamic product filtering, cart management, and secure user authentication."
              ghLink="[Your E-commerce GitHub Link Here]" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;