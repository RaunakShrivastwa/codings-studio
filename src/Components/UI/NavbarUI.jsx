import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './common.scss';
import { Button } from 'react-bootstrap';

function NavBarUI() {
  return (
    <Navbar expand="lg" className="bg_primary nav_wrapper">
      <Container>
        <Navbar.Brand href="#home" className='text-light fs-16'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light fs-16' href="#home">Gifts</Nav.Link>
            <Nav.Link className='text-light fs-16' href="#link">Photo Frame</Nav.Link>
            <Nav.Link className='text-light fs-16' href="#link">Mobile Covers</Nav.Link>
            <Nav.Link className='text-light fs-16' href="#link">Electronics</Nav.Link>
            <Nav.Link className='text-light fs-16' href="#link">BirthDay</Nav.Link>
            <Nav.Link className='text-light fs-16' href="#link">Bookie</Nav.Link>
            <Nav.Link className='text-light fs-16' href="#link">BirthDay</Nav.Link>
            <Nav.Link className='text-light fs-16' href="#link">Catogery</Nav.Link>
            <Nav.Link className='text-light fs-16' href="#link">Age</Nav.Link>
            
            <Nav.Link className='text-light fs-16' href="#link">More+</Nav.Link>
          </Nav>
          <Button className='bg-light text_primary fs-12 border-0'>Apply Filter</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarUI;