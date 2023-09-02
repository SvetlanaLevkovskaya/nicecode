import React from 'react';
import styles from './navbar.module.scss';
import { Filter, Plus, Search, Small } from '../../icons/ui/icons';


export const Navbar = () => {

	return (
		<div className={ styles.navbar__wrapper }>

			<div className={ styles.navbar__container }>
				<Search />
				<div>
					<Filter />
					<Plus />
				</div>
			</div>

			<div className={ styles.navbar__toolbar }>
				<Small />
				<div>Выбрать</div>
			</div>


		</div>

	);
};
