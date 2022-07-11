import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
// import { Button, Alert, Accordion, Badge } from "react-bootstrap";
import Counter from "./components/Counter"
import Register from "./components/Register"

let App = () => {
  return (
    <>
    <Navbar bg='dark' expand='sm' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
      </Container>
    </Navbar>

    <Counter/>
    <Register/>
          
    </>
  );
}

export default App;
