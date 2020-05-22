import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
export default class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  render() {
    return <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={this.props.poster} />
    <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Text>
        {this.props.description}
      </Card.Text>
      <strong>Cast: {this.props.cast} </strong>
    </Card.Body>
  </Card>
  }
}