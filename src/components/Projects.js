import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PROJECTS from '../data/projects';
import Project from './Project';

class Projects extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>                       
                            {PROJECTS.map(PROJECT => {
                                return(
                                    <Col sm="6" lg="4">
                                        <Project key={PROJECT.id} project={PROJECT}/>
                                    </Col>     
                                );
                            })}
                        
                        
                    </Row>
                </Container>
            
            </div>
        );
    }
}

export default Projects;
