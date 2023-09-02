import React from 'react';
import styles from './friends.module.scss';
import telegram from '../../../assets/telegram.svg';
import mod from '../../../assets/mod.svg'
import { friendsData } from '../../../data/friends';


export const Friends = ({ selectedFriendIds, handleFriendClick, showCheckboxes }: {
	selectedFriendIds: number[];
	handleFriendClick: (id: number) => void;
	showCheckboxes: boolean;
}) => {

	return (
		<>
			{friendsData.map((friend) => (
				<div
					key={friend.id}
					className={`${styles.friends__container} ${
						selectedFriendIds.includes(friend.id) ? styles.friends__container_selected : ""
					}`}
					onClick={() => handleFriendClick(friend.id)}
				>
					{showCheckboxes && (
						<div className={styles.friends__checkbox}>
							<input
								type="checkbox"
								checked={selectedFriendIds.includes(friend.id)}
								onChange={() => handleFriendClick(friend.id)}
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
					{friend.id === 3 && (
						<img src={mod} alt="modIcon" className={styles.friends__icon} />
					)}
				</div>
			))}
		</>
	);
};
