import React from 'react';
import { Header } from '../components/header';
import { Layout } from '../components/layout';
import { Navbar } from '../components/navbar';

const MainPage = () => {
	return (
		<>
			<Header />
			<Layout>
				<Navbar/>
				<div style={{background: 'red'}}>content</div>
			</Layout>
		</>
	);
};

export default MainPage;
