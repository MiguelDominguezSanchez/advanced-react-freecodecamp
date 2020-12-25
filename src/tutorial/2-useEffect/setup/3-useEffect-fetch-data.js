import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await fetch(url);
		const users = await response.json();
		setUsers(users);
		// console.log(users);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<Fragment>
			<h3>github users</h3>
			<ul className="users">
				{users.map((user) => {
					const { id, login, avatar_url, html_url } = user;
					return (
						<li key={avatar_url} alt={login}>
							<img src={avatar_url} alt={login} />
							<diV>
								<h4>{login}</h4>
								<a href={html_url}>profile</a>
							</diV>
						</li>
					);
				})}
			</ul>
		</Fragment>
	);
};

export default UseEffectFetchData;
