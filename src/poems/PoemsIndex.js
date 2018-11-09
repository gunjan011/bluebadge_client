import React from 'react';
import PoemsCompose from './PoemsCompose';
import PoemsTable from './PoemsTable';
import { Container, Row, Col } from 'reactstrap';
import PoemsEdit from './PoemsEdit';
//import {AuthContext}  from '../auth/AuthContext'

class PoemsIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      poems: [],
      updatePressed: false,
      poemToUpdate: {}
    }
  }
  fetchPoems = () => {
    console.log('fetching poems');
    fetch("http://localhost:3000/api/log/", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        return this.setState({ poems: logData.log })
      })
  }

  poemDelete = (event) => {
    fetch(`http://localhost:3000/api/log/${event.target.id}`, {
      method: 'DELETE',
      body: JSON.stringify({ log: { id: event.target.id } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => this.fetchPoems())

  }
  poemUpdate = (event, poem) => {
    console.log(`${poem.id}`)
    fetch(`http://localhost:3000/api/log/${poem.id}`, {
      method: 'PUT',
      body: JSON.stringify({ log: poem }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => {
        this.setState({ updatePressed: false })
        this.fetchPoems();
      })
  }
  setUpdatedPoem = (event, poem) => {
    this.setState({
      poemToUpdate: poem,
      updatePressed: true
    })
  }
  componentDidMount() {
    this.fetchPoems()
  }
  render() {
    const poems = this.state.poems.length >= 1 ?
      <PoemsTable poems={this.state.poems}
        delete={this.poemDelete} update={this.setUpdatedPoem} /> : <h2>D</h2>
    return (
      <Container>
        <Row>
          <Col md="3">
            <PoemsCompose token={this.props.token} updatePoemsArray={this.fetchPoems} />
          </Col>
          <Col md="9">
            {poems}
          </Col>
        </Row>
        <Col md="12"> {
          this.state.updatePressed ? <PoemsEdit t={this.state.updatePressed} update={this.poemUpdate} poem={this.state.poemToUpdate} />
            : <div></div>
        }
        </Col>
      </Container>
    )
  }
}

export default PoemsIndex;