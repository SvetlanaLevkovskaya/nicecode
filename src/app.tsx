import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { MainPageAsync } from './pages/main-page.async';

export const App = () => {
	return (
		<div className="app">
			<Suspense fallback={ <div>Loading...</div> }>
				<Routes>
					<Route path="/" element={ <MainPageAsync /> } />
				</Routes>
			</Suspense>
		</div>


	);
};

