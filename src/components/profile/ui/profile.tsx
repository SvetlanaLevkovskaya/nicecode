import React, { useState } from 'react';
import styles from './profile.module.scss'
import { ProfileInfo } from '../../profile-info';
import { ProfileButtons } from '../../profile-buttons';
import { ProfileContent } from '../../profile-content';


export const Profile = () => {
	const [activeButton, setActiveButton] = useState(null);
	return (
		<div className={ styles.profile__container }>
			<ProfileInfo />

			<ProfileButtons activeButton={activeButton} setActiveButton={setActiveButton}/>
			<ProfileContent  activeButton={activeButton} />


		</div>
	);
};
