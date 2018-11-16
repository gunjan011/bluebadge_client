import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './auth.css'

const Auth = (props) => {
    return (
        <div>
        <Container className="auth-container" >
            <Row>
    <Col md="2">
                    <Signup setToken= {props.setToken} />
                </Col>
                <Col md="2" className="login-col">
                    <Login setToken= {props.setToken} />
    </Col>
            </Row>
                 </Container>
                </div>
    ) 
} 
export default Auth;