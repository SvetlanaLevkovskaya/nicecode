import React from 'react';
import styles from './friends.module.scss';
import telegram from '../../../assets/telegram.svg';
import mod from '../../../assets/mod.svg'
import { friendsData } from '../../../data/friends';


export const Friends = ({ selectedFriendIds, handleCheckboxChange, showCheckboxes }: {
	selectedFriendIds: number[];
	handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
	showCheckboxes: boolean;
}) => {
	return (
		<>
			{friendsData.map((friend) => (
				<div
					key={friend.id}
					className={`${styles.friends__container} ${
						friend.id === 1 ? styles.friends__container_border : ''
					} ${friend.id === 2 ? styles.friends__container_selected : ''}`}
				>
					{showCheckboxes && (
						<div className={styles.friends__checkbox}>
							<input
								type="checkbox"
								checked={selectedFriendIds.includes(friend.id)}
								onChange={(event) => handleCheckboxChange(event, friend.id)}
								id={`checkbox-${friend.id}`}
							/>
							<label htmlFor={`checkbox-${friend.id}`} className={styles.friends__label}></label>
						</div>
					)}
					<img src={friend.src} alt="friend" />
					<div className={styles.friends__name}>{friend.name}</div>
					{friend.id === 1 && (
						<img src={telegram} alt="telegramIcon" className={styles.friends__icon} />
					)}
					{friend.id === 3 && <img src={mod} alt="modIcon" className={styles.friends__icon} />}
				</div>
			))}
		</>
	);
};
