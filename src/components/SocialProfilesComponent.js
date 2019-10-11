import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";
import { Container, Row, Col } from "reactstrap";

const SocialProfiles = () => {
  return (
    <div>
      <Container
        style={{ width: "90%", marginLeft: "0px", marginBottom: "20px" }}
      >
        <Row>
          {SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
            return (
              <Col xs="3" key={SOCIAL_PROFILE.id}>
                <a href={SOCIAL_PROFILE.link}>
                  <img
                    src={SOCIAL_PROFILE.image}
                    alt="Social media Icon"
                    className="socialMediaIcon"
                  />
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SocialProfiles;
