import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
	const style = {
		'@media(min-width: 500px)': {
			width: '450px'
		}
	};
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm person! My name is {props.name}, test = {props.children}</p>
            <input type="name" onChange={props.change} value={props.name}/>
        </div>
    );
};

export default Radium(person);