import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NSS Portal",
      description: "HTML, CSS and javascript",
      imgUrl: projImg4,
      link: "https://nss-siesgst.vercel.app/",
    },
    {
      title: "SkillSpace",
      description: "Flask Project",
      imgUrl: projImg5,
      link: "https://mentorconnect-dy64.onrender.com/",
    },
    {
      title: "Weather-App",
      description: "React.js + Vite Project",
      imgUrl: projImg6,
      link: "https://weather-jwm3yjaow-aayush-shahs-projects.vercel.app/",
    },
    {
      title: "Grocery Shop",
      description: "React.js and Node.js Project",
      imgUrl: projImg7,
      link: "https://github.com/01aayu/Grocery",
    },
    {
      title: "Contact Manager App",
      description: "Node.js, Express.js and MongoDB Project",
      imgUrl: projImg8,
      link: "https://github.com/01aayu/Contact-Manger-App",
    },
    {
      title: "Spotify",
      description: "Javascript Project",
      imgUrl: projImg9,
      link: "https://spotify-alpha-black.vercel.app/",
    },
    {
      title: "CarBank",
      description: "UI/UX Project",
      imgUrl: projImg10,
      link: "https://github.com/01aayu/CarBank",
    },
    {
      title: "NSS System",
      description: "PHP Project",
      imgUrl: projImg11,
      link: "https://github.com/01aayu/NSS-PORTAL",
    },
    {
      title: "Mini Mario",
      description: "Game Development",
      imgUrl: projImg12,
      link:"https://github.com/01aayu/Mini-Mario"
    },
  ];

  // Split projects between Tab 1 and Tab 2
  const projectsTab1 = projects.slice(0, 3); // First 6 projects
  const projectsTab2 = projects.slice(3, 6);
  const projectsTab3 = projects.slice(6, 9); // Remaining 3 projects

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This section showcases a curated selection of my projects, each demonstrating my skills in web development, software engineering, and data visualization. Every project reflects my ability to solve complex problems, from backend API development to creating interactive dashboards. Dive into each project to explore the technologies used, challenges overcome, and the impact delivered.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTab1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projectsTab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
