import React from 'react';
import ProfileButton from '../../../assets/button.svg'
import styles from './profilebuttons.module.scss'


export const ProfileButtons = () => {
	return (
		<div className={styles.profileButton__container}>
			<div className={styles.profileButton__leftContainer}>
				<button className={styles.profileButton}>Заметки</button>
				<button className={styles.profileButton}>Консультации</button>
				<button className={styles.profileButton}>Видео</button>
				<button className={styles.profileButton}>Мероприятия</button>
			</div>
			<div className={styles.profileButton__rightContainer}>
				<button className={styles.profileButton}>
					Новая заметка
					<img src={ProfileButton} alt="ProfileButton" className={styles.profileButton__icon} />
				</button>
			</div>
		</div>
	);
};
