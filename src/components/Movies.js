import React, { Component } from 'react';
import { Table, Card, Row, Col } from 'react-bootstrap';
import MovieDetail from './MovieDetail';
import {FormattedMessage} from 'react-intl';
export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            err: '',
            movie: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (!navigator.onLine) {
            if (localStorage.getItem('characters') === null) {
                this.setState({ err: '!OOPS, Something Happened...\n Retry Again Later' });
            }
            else {
                this.setState({ movies: localStorage.getItem('movies') });
            }
        }

        if (this.props.int.locale === 'en' || this.props.int.locale === 'en-ES') {
            fetch('https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json')
                .then(result => result.json())
                .then(res => {
                    this.setState({ movies: res });
                    localStorage.setItem('movies', this.state.movies);
                    console.log(this.state.movies);
                });

        }
        else {
            fetch('https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json')
                .then(result => result.json())
                .then(res => {
                    this.setState({ movies: res });
                    localStorage.setItem('movies', this.state.movies);
                    console.log(this.state.movies);
                });
        }
    }

    handleClick = (i) => {
        this.setState({ movie: i });
    }


    render() {
        let display = null;
        if (this.state.movie !== 0) {
            display = (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.movies[this.state.movie - 1].poster} />
                    <Card.Body>
                        <Card.Title>{this.state.movies[this.state.movie - 1].name}</Card.Title>
                        <Card.Text>
                            {this.state.movies[this.state.movie - 1].description}
                        </Card.Text>
                        <strong><FormattedMessage id="Cast"/>: {this.state.movies[this.state.movie - 1].cast} </strong>
                    </Card.Body>
                </Card>
            )
        }


        return (<div>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th><FormattedMessage id="Name" /></th>
                                <th><FormattedMessage id="DirectedBy"/></th>
                                <th><FormattedMessage id="Country"/> </th>
                                <th><FormattedMessage id="Budget"/></th>
                                <th><FormattedMessage id="ReleaseDate"/></th>
                                <th><FormattedMessage id="Views"/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map((elem, i) => (
                                <MovieDetail key={i} movie={elem} pass={this.handleClick} />
                            ))}

                        </tbody>
                    </Table>
                </Col>
                <Col>
                    {display}
                </Col>

            </Row>
        </div>

        )
    }
}

