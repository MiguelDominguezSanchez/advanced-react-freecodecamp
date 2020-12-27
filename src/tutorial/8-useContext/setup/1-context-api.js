import React, { useState, useContext } from 'react';
import { data } from '../../../data';
import { Fragment } from 'react';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
	const [people, setPeople] = useState(data);
	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id);
		});
	};
	return (
		<PersonContext.Provider value={{ removePerson, people }}>
			<h3>Context API / useContext</h3>
			<List />
		</PersonContext.Provider>
	);
};

const List = () => {
	const mainData = useContext(PersonContext);
	console.log(mainData);
	return (
		<s>
			{mainData.people.map((person) => {
				return <SinglePerson key={person.id} {...person} />;
			})}
		</s>
	);
};

const SinglePerson = ({ id, name }) => {
	const { removePerson } = useContext(PersonContext);

	return (
		<div className="item">
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	);
};

export default ContextAPI;
