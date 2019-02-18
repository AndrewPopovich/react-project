import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
	const [personsState, setStateFunc] = useState({
		persons: ['Andrew', 'Max', 'Tanya'],
		index: 0
	});

	const switchNameHandler = () => {
		const randomNum = Math.floor(Math.random() * 3);
		setStateFunc({
			...personsState,
			index: randomNum
		});
	};

	const onChangeHandler = event => {
		setStateFunc({
			persons: [event.target.value, 'Max', event.target.value],
			index: 0
		});
	};

	const style = {
		backgroundColor: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer'
	};

	return (
		<div>
			<button
				onClick={switchNameHandler}
				style={style}
			>Switch name</button>
			<Person
				name={personsState.persons[personsState.index]}
				click={switchNameHandler}
				change={onChangeHandler}
			> Test </Person>
		</div>
	)
};

export default app;