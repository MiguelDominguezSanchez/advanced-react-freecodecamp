import React, { useEffect, useRef } from 'react';
import { Fragment } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasic = () => {
	const refContainer = useRef(null);
	const divContainer = useRef(null);
	const hadleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value);
		console.log(divContainer.current);
	};
	useEffect(() => {
		console.log(refContainer.current);
		refContainer.current.focus();
	});
	console.log(refContainer);
	return (
		<Fragment>
			<form className="form" onSubmit={hadleSubmit}>
				<div>
					<input type="text" ref={refContainer} />
					<button type="submit">submit</button>
				</div>
			</form>
			<div ref={divContainer}>hello world</div>
		</Fragment>
	);
};

export default UseRefBasic;
