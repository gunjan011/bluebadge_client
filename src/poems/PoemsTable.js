import React from 'react';
import { Table, Button } from 'reactstrap';


const PoemsTable = (props) => {

    return (
        <div>
            <h3>Composition History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Caption</th>
                        <th>Compose</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.poems.map((poem, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{poem.id}</th>
                                    <td>{poem.caption}</td>
                                    <td>{poem.compose}</td>
                                    <td>
                                        <Button id={poem.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={poem.id} onClick={e => props.update(e, poem)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default PoemsTable;