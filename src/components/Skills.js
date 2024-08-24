import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
//import meter4 from "../assets/img/meter4.svg";
//import meter5 from "../assets/img/meter5.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>The Skills section showcases my technical expertise in frontend and backend development, data visualization, and essential tools. Each skill is represented by a percentage, reflecting my proficiency and experience, offering a clear view of my strengths and what I can bring to your project.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="HTML & CSS" />
                                <h5>HTML & CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="HTML & CSS" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Javascript" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Vite" />
                                <h5>Vite</h5> 
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Flask" />
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="node.js" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="node.js" />
                                <h5>Editing & designing</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="WExpress.js" />
                                <h5>Express.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="MongoDB" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="node.js" />
                                <h5>DevOps</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="node.js" />
                                <h5>Unity</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="node.js" />
                                <h5>PHP</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
