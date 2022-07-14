import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
// import { Button, Alert, Accordion, Badge } from "react-bootstrap";
// import Counter from "./components/Counter"
// import Register from "./components/Register"
import UserTable from "./components/Usertable"
import Users from './components/Users'
// import Test from './components/test'

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
    <Users/>
    {/* <Test/> */}
    </>
  );
}

export default App;
