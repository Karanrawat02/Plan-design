import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assests/pndlogo.png'

function Navbarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img style={{"width": "142px"}} src="https://www.planndesign.com/pndlogo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title=" Drawing Store " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Drawings </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Residential </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Religious</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Commercial</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Landscaping</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Hospitality</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Wet Areas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Retail</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Furniture Fitting & Equipment</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.10">Health Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.11">Engineering and Building</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.12">Industrial</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.13">Institutional</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title=" Buying Guide " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Buying Guide </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Architectural design </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Home furniture</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.4">Office Product Furniture</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.5">Architectural Stationary</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.6">Other</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.7">Smart Home products</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.8">Architectural Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.9">Architectural Tools</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.10">Bathroom Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.11">Home Decor Products </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title=" Design Ideas " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/5.1">All Design ideas </NavDropdown.Item>
              <NavDropdown.Item href="#action/5.2">Architecture </NavDropdown.Item>
              <NavDropdown.Item href="#action/5.3">Office</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.4">Vaastu</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.5">Office Products Furniture</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.6">AutoCad</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.7">Bathroom</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.8">Bedroom</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.9">Design Ideas</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.10">Exterior</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.11">Furniture</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.12">Home Decor</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.13">Interior Design</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home"> Videos </Nav.Link>
            <Nav.Link href="#link"> Portfolio </Nav.Link> 

          </Nav>
          <Form className="d-flex">
          <NavDropdown title="LOGIN" id="basic-nav-dropdown" style={{ "margin":"12px"}}>
              <NavDropdown.Item href="Sign-in">Sign-in</NavDropdown.Item>
              <NavDropdown.Item href="Sign-Up">Sign-Up</NavDropdown.Item>
            </NavDropdown>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;