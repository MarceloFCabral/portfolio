import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { SiReact, SiNodeDotJs, SiC } from "react-icons/si";
import { GenContainer, Separator } from "./Layout";
import { BG_COLOR } from "../style";
import { Row } from "react-bootstrap";

const titleStyle = {
  borderBottomWidth: 1,
  borderBottomColor: "#d1d1d1",
  borderBottomStyle: "solid",
  borderLeftWidth: 9,
  borderLeftColor: "#d1d1d1",
  borderLeftStyle: "solid",
  backgroundColor: "#f2f2f2",
  paddingLeft: 10,
  paddingTop: 3,
  paddingBottom: 3,
  marginBottom: "2rem",
};

const Projects = () => {
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
        <div style={titleStyle}>
          <h1>JavaScript</h1>
        </div>
        <Row style={{ alignItems: "center" }}>
          <SiNodeDotJs size={30} style={{ marginLeft: 15, marginRight: 10 }} />
          <h2>Node.js</h2>
        </Row>
        <Separator />
        <div style={{ marginBottom: "3rem" }}>
          <h3>E-commerce backend app</h3>
          <p>
            This backend software was designed to serve requests from an online
            store frontend.
          </p>
          <p>
            It runs on Node.js and was built using <b>Express</b>,{" "}
            <b>MongoDB</b> (through the Mongoose ODM) and <b>JWT</b>{" "}
            authentication for security.
          </p>
          <p>
            It handles database relations between Categories, Products, Orders,
            Order Items and Users, authenticated and unauthenticated routes and
            requisition errors.
          </p>
          <a href="https://github.com/MarceloFCabral/ecommerce-backend">
            Click here to see the project's repository on GitHub.
          </a>
        </div>
        <Row style={{ alignItems: "center" }}>
          <SiReact size={30} style={{ marginLeft: 15, marginRight: 10 }} />
          <h2>React Native</h2>
        </Row>
        <Separator />
        <div style={{ marginBottom: "3rem" }}>
          <h3>Virtual Menu managing app</h3>
          <p>
            This app was being developed to serve as an administrators' panel to
            a virtual menu. It was built with the React Native library, making
            use of
            <b> React's Hooks API</b>, <b>Context API</b> and a combination of
            stack and tab navigators from <b>React Navigation</b>.
          </p>
          <p>
            <b>React Native Paper</b> (a component implementation of Google's
            Material Design for React Native) was used alongside the
            <b> Styled Components </b>
            library to create and customize the UI.
          </p>
          <p>
            The user would be able to create categories (making them a
            subcategory or not) and products for each shop or business through a
            REST API.
          </p>
          <p>
            Categories and products would compose the menu's body, which would
            be modifiable by assigning a product or a category to a different
            parent category (or making a child category a new parent category)
            or by modifying data (name, description and price) and commiting
            these changes to the database through the API.
          </p>
          <a href="https://github.com/MarceloFCabral/virtual-menu-manager">
            Click here to see the project's repository on GitHub.
          </a>
        </div>
        <div style={titleStyle}>
          <h1>C</h1>
        </div>
        <h3>Do: scheduling software</h3>
        <div>
          <p>A scheduling software made using only native C features.</p>
          <a href="https://github.com/MarceloFCabral/do">
            Click here to see the project's repository on GitHub.
          </a>
        </div>
      </Container>
    </GenContainer>
  );
};

export default Projects;
