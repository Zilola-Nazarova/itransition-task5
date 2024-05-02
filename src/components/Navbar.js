import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Errors from './Errors';
import Region from './Region';
import Seed from './Seed';
import Export from './Export';

const Navigation = () => (
  <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#">Fake Data Generator</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="me-auto my-2 my-lg-0"
        >
          <Region />
          <Errors />
          <Seed />
          <Export />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
