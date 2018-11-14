import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './modal.css';

class PoemsEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            caption: '',
            compose: ''
        };
    }
    componentWillMount() {
        this.setState({
            id: this.props.poem.id,
            caption: this.props.poem.caption,
            compose: this.props.poem.compose
        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }
    render() {
        return (
            <div className='modal'>
                <Modal isOpen={true} >
                    <ModalHeader >Compose a poem</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            {/*<FormGroup>
                                <Label for="id">Poem Id</Label>
                                <Input id="id" type="text" name="id" value={this.state.id} placeholder="enter Poem id" onChange={this.handleChange} />
                            </FormGroup>*/}
                            <FormGroup>
                                <Label for="caption">Caption</Label>
                                <Input id="caption" type="text" name="caption" value={this.state.caption} placeholder="enter a caption" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="compose">Compose</Label>
                                <Input id="compose" type="text" name="compose" value={this.state.compose} placeholder="compose" onChange={this.handleChange} />
                            </FormGroup>
                            <Button id="press"type="submit"> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default PoemsEdit;