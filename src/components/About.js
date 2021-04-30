import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import pic from "../perfil.jpg";
import { GenContainer, Separator } from "./Layout";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BG_COLOR /*NAV_COLOR*/ } from "../style";
import {
  SiJavascript,
  SiReact,
  SiGit,
  SiNodeDotJs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { GiComputing } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";

const About = () => {
  return (
    <GenContainer fluid={true}>
      <Container
        style={{
          height: "100%",
          paddingTop: "3rem",
          paddingBottom: "3rem",
          backgroundColor: BG_COLOR,
        }}
      >
        <Row
          style={{
            marginTop: "3rem",
            marginBottom: "6rem",
            alignItems: "center",
          }}
        >
          <Image
            src={pic}
            style={{ height: 250, marginRight: "5vh" }}
            roundedCircle
          />
          <div>
            <h2>Hey! I'm Marcelo.</h2>
            <p>
              I'm a JavaScript programmer with experience in developing React
              and React Native applications.
            </p>
            <p>
              I've also had contact with and studied the C, C++ and Java
              programming languages.
            </p>
            <p>
              I am an avid learner who is constantly looking for new challenges
              and problems to solve.
              <br />
              Here you will find a sample of my work that will hopefully
              illustrate my capabilities as a developer.
              <br />
              If you have any questions or business inquiries, feel free to
              contact me!
            </p>
            <p>
              <RiMailLine /> E-mail:{" "}
              <a href="mailto:marcelofc12@gmail.com">marcelofc12@gmail.com</a>
            </p>
            <p>
              <FaLinkedin /> LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/marcelofcabral/">
                marcelofcabral
              </a>
            </p>
            <p>Have a nice stay!</p>
          </div>
        </Row>
        <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
          <h2>Academic background</h2>
          <Separator />
          <p>
            I was a Computer Science undergraduate at Pontifícia Universidade
            Católica de Minas Gerais (PUC-MG) from August 2019 to December 2020.
          </p>
          <p>
            I had a course transfer in the end of 2020 and I've now been a
            Computer Engineering undergraduate at the FUMEC University since
            January 2021.
          </p>
        </div>
        <h2>Main skills</h2>
        <Separator />
        <CardGroup>
          <Card>
            {/*<Card.Img src={react_logo} style={{ backgroundColor: BG_COLOR }} />*/}
            <Card.Body>
              <Card.Title>
                <SiJavascript /> JavaScript
              </Card.Title>
              <Card.Text>
                Working with React and React Native has given me solid knowledge
                on many tools and features available in JavaScript.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            {/*<Card.Img src={react_logo} style={{ backgroundColor: BG_COLOR }} />*/}
            <Card.Body>
              <Card.Title>
                <SiReact /> React
              </Card.Title>
              <Card.Text>
                React applications built using the latest features and best
                practices.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            {/*<Card.Img src={react_logo} style={{ backgroundColor: BG_COLOR }} />*/}
            <Card.Body>
              <Card.Title>
                <SiReact /> React Native
              </Card.Title>
              <Card.Text>
                Responsive apps created with usability, efficiency and ease of
                maintenance in mind.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup style={{ marginBottom: "3rem" }}>
          {/*<Card>
            <Card.Img src={react_logo} style={{ backgroundColor: BG_COLOR }} />
            <Card.Body>
              <Card.Title>
                <SiBootstrap /> React Bootstrap
              </Card.Title>
              <Card.Text>
                I make use of this fantastic library to deliver applications that aren't only efficient but also market standard-looking.
              </Card.Text>
            </Card.Body>
          </Card>*/}
          <Card>
            {/*<Card.Img src={react_logo} style={{ backgroundColor: BG_COLOR }} />*/}
            <Card.Body>
              <Card.Title>
                <GiComputing /> Data Structures and Algorithms
              </Card.Title>
              <Card.Text>
                Computer Science and Computer Engineering academic background
                has provided me a good grasp on the fundamentals of DSA. I
                regard these concepts as essential and primary when building any
                kind of software.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            {/*<Card.Img src={react_logo} style={{ backgroundColor: BG_COLOR }} />*/}
            <Card.Body>
              <Card.Title>
                <SiGit /> git
              </Card.Title>
              <Card.Text>
                Version control using local and remote repositories.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <h2>Currently studying</h2>
        <Separator />
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>
                <SiNodeDotJs /> Node.js
              </Card.Title>
              <Card.Text>
                I've recently built my first backend application that runs on
                Node.js (it can be found on my projects page). Acquiring more
                knowledge about Node.js is my main task at the moment. I've been
                studying the RTE on a daily basis and I intend to take courses
                and certification tests to further improve my abilities to work
                with it.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <SiMongodb /> MongoDB
              </Card.Title>
              <Card.Text>
                My first backend app uses MongoDB (and the Mongoose API) to
                manage database resources.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <SiMysql /> SQL DBMS
              </Card.Title>
              <Card.Text>
                The rise of non-relational databases such as MongoDB hasn't made
                relational databases any less relevant; thus, continuously
                improving my SQL skills remains a major goal.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </GenContainer>
  );
};

export default About;
