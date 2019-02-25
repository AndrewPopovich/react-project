import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm person! My name is {props.name}, test = {props.children}</p>
            <input type="name" onChange={props.change} value={props.name}/>
        </div>
    );
};

export default person;