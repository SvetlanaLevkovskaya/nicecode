import React, { useState } from 'react';
import styles from './profile-info.module.scss'
import profileInfoImg from '../../../assets/ProfileInfoImg.svg'
import { DropdownIcon } from '../../dropdown-icon';

export const ProfileInfo = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [isDropdownClicked, setIsDropdownClicked] = useState(false);

	const handleDropdownClick = () => {
		setShowDropdown(!showDropdown);
		setIsDropdownClicked(!isDropdownClicked)
	};

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
				<DropdownIcon onClick={handleDropdownClick} isDropdownClicked={isDropdownClicked}/>
				{showDropdown && (
					<div className={styles.profileInfo__dropdown}>
						<div className={styles.profileInfo__dropdownItem}>
							Изменить
						</div>
						<div className={styles.profileInfo__dropdownItem}>
							Удалить
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
