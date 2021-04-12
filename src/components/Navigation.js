import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NAV_COLOR } from '../style';

const Navigation = () => {
  return (
    <div className="container-fluid" style={{ marginBottom: '3.4rem' }}>
      <Navbar bg={NAV_COLOR} fixed="top">
        <Navbar.Brand as={Link} to="/">Marcelo F. Cabral</Navbar.Brand>
        {/*<div className="row justify-content-end" style={{ width: '100%' }}>*/}
        <div style={{ width: '100%' }}>
          {/*<div style={{ width: '40%' }}>*/}
            <Nav fill>
              {/*<Nav.Link href="#home">Home</Nav.Link>*/}
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </div>
        {/*</div>*/}
      </Navbar>
    </div>
  );
}
/*
const Navbar = () => {
  return (
    <div class="container-fluid">
      <div className="row justify-content-between">
        <h2>Marcelo F. Cabral</h2>
        <div style={{ width: '50%' }}>
          <Nav fill activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </div>
  );
}
*/
export default Navigation;