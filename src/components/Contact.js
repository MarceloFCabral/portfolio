import 'bootstrap/dist/css/bootstrap.min.css';
import { BG_COLOR } from '../style';
import { GenContainer, Separator } from './Layout';
import Row from 'react-bootstrap/Row';
//import { SiMinutemailer } from "react-icons/si";
import Container from 'react-bootstrap/Container';
import { FaLinkedin } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";

const Contact = () => {
  return (
    <GenContainer fluid={true}>
      <Container style={{ height: '100vh', paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: BG_COLOR }}>
        <h1>Contact</h1>
        <Separator />
        <Row style={{ alignItems: 'center', marginBottom: '3rem' }}>
          <RiMailLine size={50} style={{ marginRight: 10, marginLeft: 20 }} />
          <div>
            <h2>E-mail</h2>
            <a href="mailto:marcelofc12@gmail.com">marcelofc12@gmail.com</a>
          </div>
        </Row>
        <Row style={{ alignItems: 'center' }}>
          <FaLinkedin size={50} style={{ marginRight: 10, marginLeft: 20 }} />
          <div>
            <h2>LinkedIn</h2>
            <a href="https://www.linkedin.com/in/marcelofcabral/">marcelofcabral</a>
          </div>
        </Row>
      </Container>
    </GenContainer>
  );
}

export default Contact;