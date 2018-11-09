import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import {AuthContext}  from '../auth/AuthContext'

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
        fetch(`http://localhost:3000/api/log/`, {
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
            <div>
                <h3>Compose a poem</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="id">Poem ID</Label>
                        <Input id="id" type="text" name="id" value={this.state.id} placeholder="Id" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="caption">Caption</Label>
                        <Input id="caption" type="text" name="caption" value={this.state.caption} placeholder="enter caption" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="compose">Compose</Label>
                        <Input id="compose" type="text" name="compose" value={this.state.compose} placeholder="compose" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}
//using authcontext and setting it to the prop called auth!
export default PoemsCompose;