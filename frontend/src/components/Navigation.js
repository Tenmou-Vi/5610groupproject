import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">🎮 Indie Game Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === '/'}
            >
              🏠 Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/assets" 
              active={location.pathname === '/assets'}
            >
              🎨 Assets
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/tasks" 
              active={location.pathname === '/tasks'}
            >
              📋 Tasks
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/team" 
              active={location.pathname === '/team'}
            >
              👥 Team
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/versions" 
              active={location.pathname === '/versions'}
            >
              📦 Versions
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-light" size="sm">
              🔄 Refresh
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
