import React from 'react';
import { Header } from '../components/header';
import { Layout } from '../components/layout';
import { Sidebar } from '../components/sidebar';
import { Profile } from '../components/profile';

const MainPage = () => {
	return (
		<>
			<Header />
			<Layout>
				<Sidebar/>
				<Profile />
			</Layout>
		</>
	);
};

export default MainPage;
