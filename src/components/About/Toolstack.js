import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMysql,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* IDE */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      {/* API TESTING */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* DATABASE MANAGEMENT TOOL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* MySQL Tool/Workbench */}
      </Col>

    </Row>
  );
}

export default Toolstack;
