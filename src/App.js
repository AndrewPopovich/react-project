import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {

	state = {
		persons: [
			{
				id: 0,
				name: 'Andrew',
				age: 24
			},
			{
				id: 1,
				name: 'Max',
				age: 21
			},
			{
				id: 2,
				name: 'Tanya',
				age: 29
			}
		],
		showPerson: false
	};

	style = {
		backgroundColor: 'green',
		color: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer',
		':hover': {
			backgroundColor: 'lightgreen',
			color: 'black'
		}
	};

	switchNameHandler = () => {
		this.setState({
			showPerson: !this.state.showPerson
		});
	};

	onChangeHandler = (event, id) => {
		const index = this.state.persons.findIndex(p => p.id === id);
		const persons = [...this.state.persons];
		persons[index].name = event.target.value;

		this.setState({persons});
	};

	deletePersonHandler = (index) => {
		const persons = this.state.persons.slice();
		persons.splice(index, 1);
		this.setState({persons: persons});
	};

	buttonStyle = () => {
		if (!this.state.showPerson) {
			return this.style;
		} else {
			const redButton = {...this.style};
			redButton.backgroundColor = 'red';
			redButton[':hover'] = {
				backgroundColor: 'salmon',
				color: 'black'
			};
			return redButton;
		}
	};

	showPersons = () => {
		if (this.state.showPerson) {
			return (
				<div>
					{this.state.persons.map((item, index) => {
						return (
							<Person
								name={item.name}
								click={() => this.deletePersonHandler(index)}
								change={event => this.onChangeHandler(event, item.id)}
								key={item.id}
							> Test </Person>
						);
					})}
				</div>
			)
		}
		return null;
	};

	classes = ['red', 'bold'].join(' ');

	render() {
		return (
			<StyleRoot>
				<div className={"App"}>
					<p className={this.state.persons.length <= 2 ? this.classes : null}>This is work fine!</p>
				<button
					onClick={this.switchNameHandler}
					style={this.buttonStyle()}
				>Switch name
				</button>
				{this.showPersons()}
			</div>
			</StyleRoot>
		)
	};
}

export default Radium(App);