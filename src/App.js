import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
// import { Button, Alert, Accordion, Badge } from "react-bootstrap";
// import Counter from "./components/Counter"
// import Register from "./components/Register"
import UserTable from "./components/Usertable"

let App = () => {
  return (
    <>
    <Navbar bg='dark' expand='sm' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
      </Container>
    </Navbar>

    {/* <Counter/> */}
    {/* <Register/> */}
    <UserTable/>
          
    </>
  );
}

export default App;
