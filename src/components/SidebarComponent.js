import React, { Component } from "react";
import { Button, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import SocialProfiles from "./SocialProfilesComponent";

class Sidebar extends Component {
  state = { display: false };
  displaymoreInfo = () => {
    this.setState({ display: !this.state.display });
  };
  render() {
    const moreInfo = (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <Button color="link" onClick={this.displaymoreInfo}>
          Show less
        </Button>
      </div>
    );

    return (
      <div>
        <header>
          <div className="container">
            <h1 className="display-4">Portfolio</h1>
            <p style={{ color: "#808080" }}>
              Diverse work with simplicity and elegance
            </p>
            <hr />
          </div>
        </header>

        <div className="container" style={{ marginTop: "17px" }}>
          <p>
            This is a simple and minimal template built using reactJS and
            reactstrap. Suitable for portfolios, photo galleries, and more.
          </p>

          {this.state.display ? (
            moreInfo
          ) : (
            <Button
              outline
              color="secondary"
              size="sm"
              onClick={this.displaymoreInfo}
            >
              read more
            </Button>
          )}

          <Nav vertical style={{ marginTop: "35px", marginBottom: "35px" }}>
            <NavItem>
              <NavLink to="/" className="navLinkStyle">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="navLinkStyle">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" className="navLinkStyle">
                Contact
              </NavLink>
            </NavItem>
          </Nav>

          <div>
            <SocialProfiles />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
