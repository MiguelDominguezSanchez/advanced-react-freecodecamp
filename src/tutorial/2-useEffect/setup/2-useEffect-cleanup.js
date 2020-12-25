import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		console.log('useEffect');
		window.addEventListener('resize', checkSize);
		return () => {
			console.log('cleanup');
			window.removeEventListener('resize, checkSize');
		};
	}, []);

	console.log('render');
	return (
		<Fragment>
			<h1>window</h1>
			<h2>{size} PX</h2>
		</Fragment>
	);
};

export default UseEffectCleanup;
