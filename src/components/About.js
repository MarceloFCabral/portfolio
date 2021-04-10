import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import pic from '../perfil.jpg';

import { BG_COLOR } from '../style';

const About = () => {
  return (
    <div className="container-fluid" style={{ height: '100vh', backgroundColor: BG_COLOR }}>
      <div className="container">
        <div style={{ backgroundColor: BG_COLOR, paddingTop: '3rem' }}>
          <h1>About</h1>
          <div style={{ backgroundColor: '#e0e0e0', height: 1, marginBottom: '3rem' }} />
          <Row>
            <Image src={pic} style={{ height: 250, marginRight: '5vh' }} roundedCircle />
            <div>
              <h2>Hey! I'm Marcelo.</h2>
              <p>I'm a JavaScript programmer with experience in developing React and React Native applications.</p>
              <p>I've also had contact with and studied the C, C++ and Java programming languages.</p>
              <p>
                I am an avid learner who is constantly looking for new challenges and problems to solve.<br />
                Here you will find a sample of my work that will hopefully illustrate my capabilities as a developer.<br /> 
                If you have any questions or business inquiries, feel free to contact me via e-mail or my LinkedIn page.
              </p>
              <p>Have a nice stay!</p>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;