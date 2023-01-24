import React from 'react'
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'

function header() {
  return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">FlopCart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/cart">Cart<i className="fas fa-shopping-cart"></i></Nav.Link>
                        <Nav.Link href="/login">Login<i className="fas fa-user"></i></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         </header>

  )
}

export default header