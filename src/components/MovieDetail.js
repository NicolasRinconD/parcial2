import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage } from 'react-intl';
export default class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
        <tr>
            <th scope="row">{this.props.movie.id}</th>
            <td>{this.props.movie.name}</td>
            <td>{this.props.movie.directedBy}</td>
            <td>{this.props.movie.country}</td>
            <td>{this.props.movie.budget}</td>
            <td>
                <FormattedNumber value={this.props.movie.views} />
            </td>
            <td>
                <FormattedDate
                    value={new Date(this.props.movie.date)}
                    year='numeric'
                    month='long'
                    day='numeric'
                    weekday='long'
                />
            </td>
        </tr>
        )
    }
}