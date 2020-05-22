import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import i18n from '../i18n';
import i18next from 'i18next';
export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            langu: '',
            movies: [],
            err: ''
        };
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

        this.setState({
            langu: navigator.languages
                ? navigator.languages[0]
                : (navigator.language || navigator.userLanguage)
        });

        fetch('https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json')
            .then(result => result.json())
            .then(res => {
                this.setState( {movies : res});
                localStorage.setItem('movies', this.state.movies);
                console.log(this.state.movies, i18next.language);
            });
    }

    render() {
        return <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Directed By</th>
                        <th>Country </th>
                        <th>Budget</th>
                        <th>Release</th>
                        <th>Views</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map((elem, i) => (
                            <tr>
                                <th>{elem.id}</th>
                                <th>{elem.name}</th>
                                <th>{elem.directedby}</th>
                                <th>{elem.country}</th>
                                <th>{elem.budget}</th>
                                <th>{elem.releaseDate}</th>
                                <th>{elem.views}</th>
                            </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    }
}

