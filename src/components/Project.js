import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class Project extends Component{
    render(){
        const {title, description, image, link} = this.props.project;
        return(
            <div>
                <Card style={{border: 'none'}}>
                    <a href={link}><CardImg top width="100%" src={image} alt='design project'/></a>
                    <CardBody>
                        <CardTitle><h6>{title}</h6></CardTitle>
                        <CardText style={{fontSize: "90%", color: "#808080"}}>{description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Project;