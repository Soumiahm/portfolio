import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import './App.css';


class App extends Component{
    
    render(){
        
        return(
            <div>
                <Container>
                    <Row>
                        <Col md="4"><Sidebar/></Col>
                        <Col md="8"><Projects/></Col>
                    </Row>
                </Container>
                <footer>
                    <Container>
                        <hr/>
                    <p className="text-center">© Designer. All Rights Reserved.</p>
                    </Container>
                </footer>

            </div>
        );
    }
}

export default App;