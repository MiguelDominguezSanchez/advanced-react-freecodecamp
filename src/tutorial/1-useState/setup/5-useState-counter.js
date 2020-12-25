import React, { useState } from 'react';
import { Fragment } from 'react';

const UseStateCounter = () => {
	const [value, setValue] = useState(0);

	const reset = () => {
		setValue(0);
	};
	return (
		<Fragment>
			<section style={{ margin: '4rem 0' }}>
				<h2>regular counter</h2>
				<h1>{value}</h1>
				<button className="btn" onClick={() => setValue(value - 1)}>
					decerase
				</button>
				<button className="btn" onClick={reset}>
					reset
				</button>
				<button className="btn" onClick={() => setValue(value + 1)}>
					increase
				</button>
			</section>
		</Fragment>
	);
};

export default UseStateCounter;
