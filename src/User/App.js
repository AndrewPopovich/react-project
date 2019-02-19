import React, {Component} from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '...'
		};
	}

	changeHandler = event => {
		this.setState({
			name: event.target.value
		});
	};

	render() {
		console.log(this);
		return (
			<div>
				<UserInput change={this.changeHandler}/>
				<UserOutput name={this.state.name}/>
				<UserOutput name={this.state.name}/>
			</div>
		)
	}
}