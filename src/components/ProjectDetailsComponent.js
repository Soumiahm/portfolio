import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Spring } from "react-spring/renderprops";

const ProjectDetails = ({ project }) => (
  <Spring from={{ marginTop: -500 }} to={{ marginTop: 0 }}>
    {props => (
      <Container style={props}>
        <h2 className="display-4">{project.title}</h2>
        <Row>
          <Col sm={6}>
            <img src={project.image} width="100%" />
          </Col>
          <Col sm={6}>
            <p>{project.description}</p>
          </Col>
        </Row>
      </Container>
    )}
  </Spring>
);

export default ProjectDetails;
