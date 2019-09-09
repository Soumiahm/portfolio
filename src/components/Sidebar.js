import React, {Component} from 'react';
import {Button, Nav, NavItem, NavLink} from 'reactstrap';
import SocialProfiles from './SocialProfiles';

class Sidebar extends Component{
    state = {display: false}
    displaymoreInfo = () => {
        this.setState({display: !this.state.display});
    }
    render(){
        const moreInfo = (
            <div>
                <p>
                This is a simple and minimal one-page template built using reactJS 
                and reactstrap. Suitable for portfolios, photo galleries, and more.
                </p>
                <Button color="link" onClick={this.displaymoreInfo}>Show less</Button> 
                
            </div>
        );

        return(
            <div>
                <header>
                    <div className="container">
                        <h1 className="display-4">Graphic Designer</h1>
                        <p style={{color: "#808080"}}>Diverse work with simplicity and elegance</p>
                        <hr/>
                    </div>               
                </header>

                <div className="container" style={{marginTop: "17px"}}>

                    <p>My name is Natalie. I am a graphic designer with years of experience in design of books, 
                    brochures, menus, business cards, annual reports, 
                    Powerpoint and responsive websites.</p>

                    {this.state.display? moreInfo : <Button outline color="secondary" size="sm" onClick={this.displaymoreInfo}>read more</Button>}
                    
                    <Nav vertical style={{marginTop: "35px", marginBottom: "35px"}}>
                        <NavItem>
                            <NavLink href="/" className='navLinkStyle'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='navLinkStyle'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='navLinkStyle'>Contact</NavLink>
                        </NavItem>
                    </Nav>

                    <div>
                        <SocialProfiles/>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Sidebar;