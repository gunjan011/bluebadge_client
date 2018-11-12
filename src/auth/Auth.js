import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './auth.css'
//import GetInspired from '/Getinspired';
// import { AuthContext } from './=s/AuthContext';
    
const Auth = (props) => {
    return (
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
    )
}
export default Auth;