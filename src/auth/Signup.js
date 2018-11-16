import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

class Signup extends Component {
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
        })
    }
    handleSubmit = (event) => {
        fetch(`${APIURL}/api/user/`, {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => { return response.json() }
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h4>Sign Up</h4>
                <Form onSubmit={this.handleSubmit} >
                  <FormGroup>
                        {/*<Label for="username">Username</Label>*/}
                        <Input id="username" type="text" name="username" placeholder="Username" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        {/*<Label for="password">Password</Label>*/}
                        <Input id="su_password" type="password" name="password" placeholder="Password" onChange={this.handleChange} required/>
                    </FormGroup>
                    <Button id="signup"type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;