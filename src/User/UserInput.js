import React, { Component } from 'react';

export default class UserInput extends Component {
	render() {
		return <input onChange={this.props.change}/>
	}
}