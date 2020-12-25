import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';

const ShowHide = () => {
	const [show, setShow] = useState(false);
	return (
		<Fragment>
			<button className="btn" onClick={() => setShow(!show)}>
				show/hide
			</button>
			{show && <Item />}
		</Fragment>
	);
};

const Item = () => {
	const [size, setSize] = useState(window.innerWidth);
	const checkSize = () => {
		setSize(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', checkSize);
		return () => {
			window.removeEventListenerr('resize', checkSize);
		};
	}, []);

	return (
		<div style={{ marginTop: '2rem' }}>
			<h1>window</h1>
			<h2>size : {size} px</h2>
		</div>
	);
};

export default ShowHide;
