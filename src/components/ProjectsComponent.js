import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

const Project = ({ project }) => {
  const { title, description, image, id } = project;
  const shortnedDescription =
    description.substr(0, description.lastIndexOf(" ", 40)) + " ...";
  return (
    <Spring
      from={{ marginTop: -100, marginRight: -100, opacity: 0 }}
      to={{ marginTop: 0, marginRight: 0, opacity: 1 }}
    >
      {props => (
        <div style={props}>
          <Card style={{ border: "none" }}>
            <Link to={`/${id}`}>
              <CardImg top width="100%" src={image} alt="design project" />
            </Link>
            <CardBody>
              <CardTitle>
                <h6>{title}</h6>
              </CardTitle>
              <CardText style={{ fontSize: "90%", lineHeight: "125%" }}>
                {shortnedDescription}
              </CardText>
            </CardBody>
          </Card>
        </div>
      )}
    </Spring>
  );
};

const Projects = ({ PROJECTS }) => {
  return (
    <div>
      <Container>
        <Row>
          {PROJECTS.map(PROJECT => {
            return (
              <Col sm="6" lg="4">
                <Project key={PROJECT.id} project={PROJECT} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
