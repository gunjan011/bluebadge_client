import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './Compose.css'
//import {NavItem, Button} from 'reactstrap';
import APIURL from '../helpers/environment';
import NavBar from '../home/Navbar';

class PoemsCompose extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            caption: '',
            compose: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/api/log/`, {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updatePoemsArray()
                this.setState({
                    id: '',
                    caption: '',
                    compose: ''
                })
            })
    }

    render() {
        return (
            <div className="compose-poem">
                <h5>Compose a poem</h5>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    {/* <FormGroup>
                        <Label for="id">Poem ID</Label>
                        <Input id="id" type="text" name="id" value={this.state.id} placeholder="Id" onChange={this.handleChange} />
                   </FormGroup>*/}
                    <FormGroup>
                        {/*<Label for="caption">Caption</Label>*/}
                        <Input id="caption" type="text" name="caption" value={this.state.caption} placeholder="enter caption" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        {/*<Label for="compose">Compose</Label>*/}
                        <textarea id="compose" type="text" name="compose" value={this.state.compose} placeholder="compose" onChange={this.handleChange} />
                    </FormGroup>
                    <Button id="button" type="submit"> Submit </Button>
                    </Form>
                    {/*<Button id="logout" onClick={this.logout}>Logout</Button>*/}

            </div>
        )
    }
}
//using authcontext and setting it to the prop called auth!
export default PoemsCompose;