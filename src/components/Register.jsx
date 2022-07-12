import React, {useState} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";

let Register = () => {

    let [state, setState] = useState( {
        user : {
            username : '',
            email : '',
            password : ''
        }
    });

    let updateInput = (e) => {
        setState({
            ...state,
            user : {
                ...state.user,
                [e.target.name] : e.target.value
            }
        })
    };

    let register = (e) => {
        e.preventDefault();
        console.log(state.user)
    };


    return (
        <>
          <Container className="mt-3">
                <Row>
                    <Col md={3}>
                        <Card className="shadow-lg">
                            <Card.Header className="p-3" style={{backgroundColor: 'rgb(255,193,7)' }}>
                                <h4>Register</h4>
                            </Card.Header>
                            <Card.Body style={{backgroundColor: 'rgb(255,255,255)' }}>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                        name="username"
                                        onChange={updateInput}
                                        type="text" placeholder="Username"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                        name="email"
                                        onChange={updateInput} 
                                        type="text" placeholder="email"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                        name="password"
                                        onChange={updateInput} 
                                        type="password" placeholder="password"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Button onClick={register} variant="warning" type="submit">Register</Button>
                                    </Form.Group>
                                </Form>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>   
        </>
    )
};


export default Register