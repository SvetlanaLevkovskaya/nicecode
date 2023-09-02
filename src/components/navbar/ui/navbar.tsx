import React from 'react';
import styles from './navbar.module.scss';
import { Filter, Plus, Search, Small } from '../../icons/ui/icons';
import { Friends } from '../../friends';


export const Navbar = () => {
	return (
		<div className={ styles.navbar }>
			<div className={ styles.navbar__container }>
				<Search />
				<div className={ styles.navbar__icons }>
					<Filter />
					<Plus />
				</div>
			</div>

			<div className={ styles.navbar__toolbar }>
				<Small />
				<div className={ styles.navbar__text }>Выбрать</div>
			</div>

			<Friends />
		</div>
	);
};
