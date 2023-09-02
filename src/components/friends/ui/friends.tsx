import React from 'react';
import styles from './friends.module.scss';
import friend1 from '../../../assets/friend1.svg'
import friend2 from '../../../assets/friend2.svg'
import friend3 from '../../../assets/friend3.svg'
import friend4 from '../../../assets/friend4.svg'
import friend5 from '../../../assets/friend5.svg'
import friend6 from '../../../assets/friend6.svg'
import friend7 from '../../../assets/friend7.svg'
import friend8 from '../../../assets/friend8.svg'
import friend9 from '../../../assets/friend9.svg'
import friend10 from '../../../assets/friend10.svg'
import telegram from '../../../assets/telegram.svg';
import mod from '../../../assets/mod.svg'

const friendsData = [
	{ id: 1, name: 'Кравцова Александра', src: friend1, showTelegramIcon: true },
	{ id: 2, name: 'Рожков Денис', src: friend2, showTelegramIcon: false },
	{ id: 3, name: 'Кравцова Александра', src: friend1, showTelegramIcon: true, showModIcon: true },
	{ id: 4, name: 'Диброва Алевтина', src: friend3, showTelegramIcon: false },
	{ id: 5, name: 'Иванов Дмитрий', src: friend4, showTelegramIcon: false },
	{ id: 6, name: 'nosikov@list.ru', src: friend5, showTelegramIcon: false },
	{ id: 7, name: 'Форс Александр', src: friend6, showTelegramIcon: false },
	{ id: 8, name: 'Ахмедов Артур', src: friend7, showTelegramIcon: false },
	{ id: 9, name: 'Блажевич Игорь', src: friend8, showTelegramIcon: false },
	{ id: 10, name: 'Валиева Руфина', src: friend9, showTelegramIcon: false },
	{ id: 11, name: 'Волошина Виктория', src: friend10, showTelegramIcon: false },
	{ id: 12, name: 'Волошина Виктория', src: friend10, showTelegramIcon: false },
];


export const Friends = () => {
	return (
		<>
			{friendsData.map((friend, index) => (
				<div key={friend.id} className={styles.friends__container}>
					<img src={friend.src} alt="friend" />
					<div className={styles.friends__name}>{friend.name}</div>
					{index === 0 && friend.showTelegramIcon && (
						<img src={telegram} alt="telegramIcon" className={styles.friends__icon} />
					)}
					{friend.id === 3 && friend.showModIcon && (
						<img src={mod} alt="modIcon" className={styles.friends__icon} />
					)}
				</div>
			))}
		</>
	);
};
