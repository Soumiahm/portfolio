import React from "react";
import { Spring } from "react-spring/renderprops";

const About = () => {
  return (
    <Spring from={{ marginTop: -500 }} to={{ marginTop: 0 }}>
      {props => (
        <div style={props}>
          <h2 className="display-4">About</h2>

          <p>
            My name is Natalie. I am a graphic designer with years of experience
            in design of books, brochures, menus, business cards, annual
            reports, Powerpoint and responsive websites.Lorem ipsum has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker includi sions of Lorem Ipsum.
          </p>
        </div>
      )}
    </Spring>
  );
};

export default About;
