import React, {Component} from 'react';

export default class UserOutput extends Component {
	render() {
		return <p>My name is {this.props.name} </p>
	}
}