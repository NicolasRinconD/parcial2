import React, { Component } from 'react';
import { FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage } from 'react-intl';
export default class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        
    }
    


    render() {
        return (
        <tr onClick={() => this.props.pass(this.props.movie.id)}>
            <th scope="row">{this.props.movie.id}</th>
            <td>{this.props.movie.name}</td>
            <td>{this.props.movie.directedBy}</td>
            <td>{this.props.movie.country}</td>
            <td>{this.props.movie.budget} <strong></strong>
					<FormattedPlural value={this.props.movie.budget} 
					one={<FormattedMessage id="Singular"></FormattedMessage>} 
					other={<FormattedMessage id="Plural"></FormattedMessage>} /></td>
            <td>
                <FormattedDate
                    value={new Date(this.props.movie.releaseDate)}
                    year='numeric'
                    month='long'
                    day='numeric'
                />
            </td>
            <td>
                <FormattedNumber value={this.props.movie.views} />
            </td>
        </tr>
        )
    }
}