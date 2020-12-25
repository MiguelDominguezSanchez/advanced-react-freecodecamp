import React, { useState } from 'react';
import { Fragment } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'peter',
		age: 24,
		message: 'random message',
	});

	const [name, setname] = useState('peter');
	const [age, setAge] = useState('24');
	const [message, setMessage] = useState('random message');

	const changeMessage = () => {
		// setPerson({ ...person, message: 'hello world' });
		setMessage('hello world');
	};

	return (
		<Fragment>
			<h3>{name}</h3>
			<h3>{age}</h3>
			<h3>{message}</h3>
			<button className="btn" onClick={changeMessage}>
				change message
			</button>
		</Fragment>
	);
};

export default UseStateObject;
