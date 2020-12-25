import React, { useState } from 'react';
import { Fragment } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState('');
	const firstValue = text || 'hello world';
	const secondValue = text && 'hello world';

	return (
		<Fragment>
			<h1>{text || 'john doe'}</h1>
			{text && <h1>hello world</h1>}
			{!text && <h1>hello world</h1>}
		</Fragment>
	);
};

export default ShortCircuit;
