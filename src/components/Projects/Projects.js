import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import cryptohub from "../../Assets/Projects/cryptohub.png";
import asian from "../../Assets/Projects/asian.png";
import eduford from "../../Assets/Projects/eduford.png";
import invoice from "../../Assets/Projects/invoice.png";
import convocare from "../../Assets/Projects/convocare.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptohub}
              isBlog={false}
              title="CryptoHub"
              description="Developed a responsive cryptocurrency website using React and efficient state management with Redux Toolkit and designed the user interface using Ant Design and integrated Chart.js to present dynamic and interactive cryptocurrency chart. Utilized RapidAPI to fetch data from multiple sources, ensuring real-time and accurate information "
              ghLink="https://github.com/parth280/CryptoHub"
              demoLink="https://github.com/parth280/CryptoHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asian}
              isBlog={false}
              title="Asian Sky Shop"
              description=" Implemented a secure and user-friendly authentication system, providing seamless login and signup functionalities using React and integrated Firebase authentication to securely manage user accounts and developed a personalized user experience based on authentication status, tailoring content and features to registered users, enhancing customer engagement and loyalty"
              ghLink="https://github.com/parth280/asian-sky-shop"
              demoLink="https://github.com/parth280/asian-sky-shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduford}
              isBlog={false}
              title="Eduford E-learning"
              description="Designed and implemented a modern, intuitive UI for the e-learning platform, enhancing visual appeal and ease of navigation. Proficient in utilizing HTML, CSS to design and develop an interactive and user-friendly e-learning website and used JavaScript to create dynamic and responsive elements and providing a dynamic learning environment."
              ghLink="https://github.com/parth280/e-learning.github.io"
              demoLink="https://e-eduford.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice Generator"
              description="Developed and implemented an Invoice Creator project using React, showcasing expertise in front-end web development and enabling users to add itemized entries, configure quantities, prices, tax rates, and discounts seamlessly. Integrated a downloadable feature, allowing users to conveniently save their invoices as PDFs to their devices for enhanced accessibility."
              ghLink="https://github.com/parth280/invoice-generator"
              demoLink="https://github.com/parth280/invoice-generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={convocare}
              isBlog={false}
              title="ConvoCare"
              description="Engineered a comprehensive healthcare website using HTML, CSS, and JavaScript and successfully integrated a sophisticated chatbot powered by Dialogflow, enhancing user engagement and providing instant, AI-driven responses to healthcare-related queries. Prioritized and implemented robust security measures to ensure the confidentiality and integrity of healthcare-related data."
              ghLink="https://github.com/parth280/ConvoCare"
              demoLink="https://github.com/parth280/ConvoCare"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
