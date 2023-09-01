import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { MainPageAsync } from './pages/main-page.async';
import { Loader } from './components/loader';

export const App = () => {
	return (
		<div>
			<Suspense fallback={ <Loader /> }>
				<Routes>
					<Route path="/" element={ <MainPageAsync /> } />
				</Routes>
			</Suspense>
		</div>


	);
};

