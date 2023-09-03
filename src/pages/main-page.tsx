import React from 'react';
import { Header } from '../components/header';
import { Layout } from '../components/layout';
import { Sidebar } from '../components/sidebar';

const MainPage = () => {
	return (
		<>
			<Header />
			<Layout>
				<Sidebar/>
				<div style={{background: 'red'}}>content</div>
			</Layout>
		</>
	);
};

export default MainPage;
