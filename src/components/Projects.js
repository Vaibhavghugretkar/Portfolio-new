import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/triptak.png";
import projImg2 from "../assets/img/musicClass.png";
import projImg3 from "../assets/img/sleekPack.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "AI Trip Planner",
      description: "Personalized trip planner",
      imgUrl: projImg1,
      link: "https://triptakk.netlify.app",
    },
    {
      title: "Music Class Website",
      description:
        "An interactive platform offering personalized music lessons and resources for all skill levels.",
      imgUrl: projImg2,
      link:"https://vaibhavghugretkar.github.io/MusicClass/"
    },
    {
      title: "SleekPack",
      description: "E-commerce Webiste",
      imgUrl: projImg3,
      link:"https://github.com/Vaibhavghugretkar/SleekPack"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p
                    style={{
                      fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                      lineHeight: "1.6",
                    }}
                  >
                    I have developed a variety of full-stack applications,
                    focusing on seamless user experiences and efficient backend
                    solutions. My projects range from web platforms with payment
                    integration to AI-powered tools for personalized
                    recommendations. Leveraging technologies like React,
                    Node.js, and MongoDB, I build scalable and impactful
                    solutions. Each project reflects my passion for
                    problem-solving, innovation, and creating meaningful digital
                    experiences.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
