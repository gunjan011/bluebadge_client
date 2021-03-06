import React, { Component } from "react";
import { Form, FormGroup, Input, Button,} from 'reactstrap';
import APIURL from "../helpers/environment";
//import './Login.css'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleSubmit = (event) => {

        //console.log(this.state);
        
        fetch(`${APIURL}/api/login`, {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (Response) => Response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h4>Login</h4>
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup>
                            {/* <Label for="username">Username</Label>*/}
                            <Input id="li_username" type="text" name="username" placeholder="Username" onChange={this.handleChange} required/>
                        </FormGroup>
                        <FormGroup>
                            {/*<Label for="password">Password</Label>*/}
                            <Input id="li_password" type="password" name="password" placeholder="Password" onChange={this.handleChange} required/>
                        </FormGroup>
                        <Button type="submit"> Submit </Button>
                    </Form>
            </div>
        )
    }
}

export default Login;