import React from 'react';
import ProfileButton from '../../../assets/button.svg'
import styles from './profilebuttons.module.scss'

export const ProfileButtons = ({ activeButton, setActiveButton }: {
	activeButton: string;
	setActiveButton: (buttonName: string) => void;
}) => {


	const handleClick = (buttonName: string) => {
		setActiveButton(buttonName);
	};

	return (
		<div className={ styles.profileButton__container }>
			<div className={ styles.profileButton__leftContainer }>
				<button
					className={ `${ styles.profileButton } ${
						activeButton === 'Заметки' ? styles.activeButton : ''
					}` }
					onClick={ () => handleClick('Заметки') }
				>
					Заметки
				</button>
				<button
					className={ `${ styles.profileButton } ${
						activeButton === 'Консультации' ? styles.activeButton : ''
					}` }
					onClick={ () => handleClick('Консультации') }
				>
					Консультации
				</button>
				<button
					className={ `${ styles.profileButton } ${
						activeButton === 'Видео' ? styles.activeButton : ''
					}` }
					onClick={ () => handleClick('Видео') }
				>
					Видео
				</button>
				<button
					className={ `${ styles.profileButton } ${
						activeButton === 'Мероприятия' ? styles.activeButton : ''
					}` }
					onClick={ () => handleClick('Мероприятия') }
				>
					Мероприятия
				</button>
			</div>
			<div className={ styles.profileButton__rightContainer }>
				<button className={ styles.profileButton }>
					Новая заметка
					<img
						src={ ProfileButton }
						alt="ProfileButton"
						className={ styles.profileButton__icon }
					/>
				</button>
			</div>
		</div>
	);
};


/*
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
 */
