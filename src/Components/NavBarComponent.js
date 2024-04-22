import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavibarComponent() {

  return (

    <Navbar expand="sm" className="bg-body-tertiary">

      <Container>

        <Navbar.Brand href="/Page"></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            
            <Nav.Link href="/1">Exercício 1</Nav.Link>
            <Nav.Link href="/2">Exercício 2</Nav.Link>
            <Nav.Link href="/3">Exercício 3</Nav.Link>
            <Nav.Link href="/4">Exercício 4</Nav.Link>
            <Nav.Link href="/5">Exercício 5</Nav.Link>
            <Nav.Link href="/6">Exercício 6</Nav.Link>
            <Nav.Link href="/7">Exercício 7</Nav.Link>


           
          </Nav>
    
        </Navbar.Collapse>

      </Container>

    </Navbar>

  );
}

export default NavibarComponent;