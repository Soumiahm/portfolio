import React, {Component} from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';
import {Container, Row, Col} from 'reactstrap';

class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <Container style={{width: "90%", marginLeft: "0px"}}>
                  <Row>
                        {SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        return(
                            <Col sm="3" key={SOCIAL_PROFILE.id}>
                                <a href={SOCIAL_PROFILE.link}>
                                    <img src={SOCIAL_PROFILE.image} alt="Social media Icon" className="socialMediaIcon"/>
                                </a> 
                            </Col>
                        );
                    })}
                  </Row>
                
                </Container>
                
            </div>
        );
    }
}

export default SocialProfiles;
