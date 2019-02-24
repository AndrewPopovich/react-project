import React, {Component} from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

export default class App extends Component {

	state = {
		inputText: ''
	};

	changeInputHandler = event => {
		const text = event.target.value;
		this.setState({
			inputText: text
		});
	};

	renderListOfLetters = () => {
		const textAsArr = this.state.inputText.split(' ');

		if (this.state.inputText === '' || textAsArr.length === 0) {
			return null;
		}
		return (
			<div>
				{
					textAsArr.map((item, index) => {
						return (<CharComponent inputText={item} onClick={() => this.removeBlockHandler(index)}/>);
					})
				}
			</div>
		)
	};

	removeBlockHandler = index => {
		const textAsArr = this.state.inputText.slice().split(' ');
		textAsArr.splice(index, 1);
		this.setState({inputText: textAsArr.join(' ')});
	};

	render() {
		return (
			<div>
				<input onChange={this.changeInputHandler}/>
				<p>Length of input string is {this.state.inputText.length}</p>
				<ValidationComponent textLength={this.state.inputText.length}/>
				{this.renderListOfLetters()}
			</div>
		);
	}
}