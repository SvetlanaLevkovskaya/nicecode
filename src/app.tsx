import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import './index.scss'
import { MainPageAsync } from './pages/main-page.async';

export const App = () => {
	return (
		<div className="app">
			<Link to={ '/' }>Home</Link>
			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>
					<Route path="/" element={ <MainPageAsync /> } />
				</Routes>
			</Suspense>
		</div>


	);
};

