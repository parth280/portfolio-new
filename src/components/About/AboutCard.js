import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Parth Goyal </span>
            from <span className="purple"> Gwalior(M.P.), India.</span>
            <br />
            I am currently pursuing B.Tech. from Indian Institute of Information Technology Una.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Grab the latest news
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into real life products is my calling!"{" "}
          </p>
          <footer className="blockquote-footer">Parth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
