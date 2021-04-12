import 'bootstrap/dist/css/bootstrap.min.css';
import { BG_COLOR } from '../style';
import { GenContainer, Separator } from './Layout';
import Container from 'react-bootstrap/Container';

const Contact = () => {
  return (
    <GenContainer fluid={true}>
      <Container style={{ height: '100vh', paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: BG_COLOR }}>
        <h1>Contact</h1>
        <Separator />
        <div style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <h2>E-mail</h2>
          <p>marcelofc12@gmail.com</p>
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/marcelofcabral/">Click here.</a>
        </div>
      </Container>
    </GenContainer>
  );
}

export default Contact;