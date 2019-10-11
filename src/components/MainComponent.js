import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Projects from "./ProjectsComponent";
import Sidebar from "./SidebarComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import PROJECTS from "../data/projects";
import ProjectDetails from "./ProjectDetailsComponent";

class Main extends Component {
  render() {
    const DisplayProject = ({ match }) => {
      const projectId = parseInt(match.params.projectId, 10);
      const project = PROJECTS.filter(proj => proj.id === projectId)[0];
      console.log("project", project);
      return <ProjectDetails project={project} />;
    };

    return (
      <div>
        <Container>
          <Row>
            <Col md="4">
              <Sidebar />
            </Col>
            <Col md="8">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Projects PROJECTS={PROJECTS} />}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/:projectId" component={DisplayProject} />
                <Redirect to={Projects} />
              </Switch>
            </Col>
          </Row>
        </Container>
        <footer>
          <Container>
            <hr />
            <p className="text-center">©Soumia Hachami</p>
          </Container>
        </footer>
      </div>
    );
  }
}

export default withRouter(Main);
