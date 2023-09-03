import React from 'react';
import styles from './profile.module.scss'
import { ProfileInfo } from '../../profile-info';
import { ProfileButtons } from '../../profile-buttons';
import { ProfileContent } from '../../profile-content';


export const Profile = () => {
	return (
		<div className={ styles.profile__container }>
			<ProfileInfo />

			<ProfileButtons />
			<ProfileContent />


		</div>
	);
};
