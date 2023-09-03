import React, { useState } from 'react';
import styles from './sidebar.module.scss';
import { Friends } from '../../friends';
import { friendsData } from '../../../data/friends';
import { SearchIcon } from '../../search-icon';
import { FilterIcon } from '../../filter-icon';
import { PlusIcon } from '../../plus-icon';


export const Sidebar = () => {
	const [selectAll, setSelectAll] = useState(false);
	const [selectedFriendIds, setSelectedFriendIds] = useState([]);
	const [showActions, setShowActions] = useState(false);
	const [showCheckboxes, setShowCheckboxes] = useState(false);
	const [showSelectAllCheckbox, setShowSelectAllCheckbox] = useState(false);

	const [isSearchHovered, setIsSearchHovered] = useState(false);
	const [isFilterHovered, setIsFilterHovered] = useState(false);
	const [isPlusHovered, setIsPlusHovered] = useState(false);

	const handleSelectAll = () => {
		setSelectAll(!selectAll);
		if (!selectAll) {
			const allFriendIds = friendsData.map((friend) => friend.id);
			setSelectedFriendIds(allFriendIds);
			setShowActions(true);
		} else {
			setSelectedFriendIds([]);
			setShowActions(false);
		}
	};

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, friendId: number) => {
		event.stopPropagation();
		if (event.target.checked) {
			setSelectedFriendIds([...selectedFriendIds, friendId]);
		} else {
			setSelectedFriendIds(selectedFriendIds.filter((id) => id !== friendId));
		}
	};

	const handleSelectClick = () => {
		setShowActions(true);
		setShowCheckboxes(true);
		setShowSelectAllCheckbox(true);
	};

	const handleCancelClick = () => {
		setShowActions(false);
		setShowCheckboxes(false);
		setShowSelectAllCheckbox(false);
		setSelectAll(false);
		setSelectedFriendIds([]);
	};

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__container}>
				<SearchIcon
					onMouseEnter={() => setIsSearchHovered(true)}
					onMouseLeave={() => setIsSearchHovered(false)}
					isSearchHovered={isSearchHovered}
				/>
				<div className={styles.sidebar__icons}>
					<FilterIcon
						onMouseEnter={() => setIsFilterHovered(true)}
						onMouseLeave={() => setIsFilterHovered(false)}
						isFilterHovered={isFilterHovered}
					/>
					<PlusIcon
						onMouseEnter={() => setIsPlusHovered(true)}
						onMouseLeave={() => setIsPlusHovered(false)}
						isPlusHovered={isPlusHovered}
					/>
				</div>
			</div>

			<div className={styles.sidebar__toolbar}>
				<div className={styles.sidebar__subcontainer}>
					{showSelectAllCheckbox && (
						<div className={styles.sidebar__checkbox}>
							<input
								type="checkbox"
								checked={selectAll}
								onChange={handleSelectAll}
								id="selectAll"
							/>
							<label htmlFor="selectAll" className={styles.sidebar__label}>
								Все
							</label>

							<div className={styles.sidebar__selectedFriendsCounter}>
								{selectedFriendIds.length}
							</div>
						</div>
					)}
				</div>
				<div>
					{!showActions ? (
						<div className={styles.sidebar__counterContainer}>
							<div className={styles.sidebar__defaultFriendsCounter}>
								213
							</div>
							<button className={styles.sidebar__btn} onClick={handleSelectClick}>
								Выбрать
							</button>
						</div>

					) : (
						<>
							<button className={styles.sidebar__actionBtn} onClick={() => {}}>
								Действия
							</button>
							<button
								className={styles.sidebar__btn}
								onClick={handleCancelClick}
							>
								Отменить
							</button>
						</>
					)}
				</div>
			</div>

			<Friends
				selectedFriendIds={selectedFriendIds}
				showCheckboxes={showCheckboxes}
				handleCheckboxChange={handleCheckboxChange}
			/>
		</div>
	);
};

