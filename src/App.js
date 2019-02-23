import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

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
		backgroundColor: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer'
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

	render() {
		return (
			<div>
				<button
					onClick={this.switchNameHandler}
					style={this.style}
				>Switch name
				</button>
				{this.showPersons()}
			</div>
		)
	};
}

export default App;