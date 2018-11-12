import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from 'reactstrap';

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

        console.log(this.state);
        event.preventDefault();
        fetch("http://localhost:3000/api/login", {
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

    }
    render() {
        return (
            <div>
                <h4>Login</h4>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                       {/* <Label for="username">Username</Label>*/}
                        <Input id="li_username" type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        {/*<Label for="password">Password</Label>*/}
                        <Input id="li_password" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Login;