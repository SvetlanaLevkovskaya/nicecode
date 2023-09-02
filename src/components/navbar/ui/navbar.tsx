import React from 'react';
import styles from './navbar.module.scss';
import { Filter, Loupe, Oval, Plus } from '../../icons/icons';


export const Navbar = () => {
	return (
		<div className={ styles.navbar__container }>
			<div className={styles.navbar__container2}>
				<Oval className={ styles.navbar__searchOval } />
				<Loupe className={ styles.navbar__searchLoupe } />
			</div>



			<div className={ 'styles.navbar__searchRight' }>
				<Filter />
				<Plus />
			</div>
		</div>

	);
};
