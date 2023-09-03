import React from 'react';
import styles from './profile.module.scss'
import { ProfileInfo } from '../../profile-info';


export const Profile = () => {
	return (
		<div className={styles.profile__container}>
			<ProfileInfo />
			<div className={styles.profile__bottom}>
				<div className={styles.profile__links}>
					Profile Links
				</div>
				<div className={styles.profile__bottomText}>
					Profile Bottom
				</div>
			</div>
		</div>
	);
};
