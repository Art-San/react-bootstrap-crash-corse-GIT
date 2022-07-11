import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

let Register = () => {
    return (
        <>
          <Container className="mt-3">
                <Row>
                    <Col xs={3}>
                        <Card className="shadow-lg">
                            <Card.Header className="p-3" style={{backgroundColor: 'orange' }}>
                                <h4>Register</h4>
                            </Card.Header>
                            <Card.Body>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>   
        </>
    )
};


export default Register