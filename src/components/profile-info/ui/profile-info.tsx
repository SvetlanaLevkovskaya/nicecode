import React from 'react';
import styles from './profile-info.module.scss'
import profileInfoImg from '../../../assets/ProfileInfoImg.svg'
import { CombanedShape } from '../../icons/ui/icons';

export const ProfileInfo = () => {
	return (
		<div className={styles.profileInfo__container}>
			<div className={styles.profileInfo__leftContainer}>
				<img src={profileInfoImg} alt="profileInfoImg" />
				<div className={styles.profileInfo__subcontainer}>
					<div className={styles.profileInfo__name}>Рожков Денис Петрович</div>
					<div className={styles.profileInfo__dop}>30 лет, муж</div>
				</div>
			</div>
			<div className={styles.profileInfo__rightContainer}>
				<CombanedShape />
			</div>
		</div>
	);
};
