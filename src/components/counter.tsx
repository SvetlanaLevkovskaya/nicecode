import React, { useState } from 'react';
import classes from './counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)

	const inc = () => {
		setCount(count + 1)
	}

	const dec = () => {
		setCount(count - 1)
	}

	return (
		<>
			<div className={classes.content}>
				content
				{count}
			</div>
			<button onClick={inc}>inc</button>
			<button onClick={dec}>dec</button>
		</>

	);
};

