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
		setShowCheckboxes(!showCheckboxes);
	};

	const handleFriendClick = (friendId: number) => {
		if (selectedFriendIds.includes(friendId)) {
			setSelectedFriendIds(selectedFriendIds.filter((id) => id !== friendId));
		} else {
			setSelectedFriendIds([...selectedFriendIds, friendId]);
		}
	};

	const handleSelectClick = () => {
		setShowActions(true);
		setShowCheckboxes(true);
	};

	const handleCancelClick = () => {
		setShowActions(false);
		setShowCheckboxes(false);
		setSelectAll(false);
		setSelectedFriendIds([]);
	};

	return (
		<div className={ styles.sidebar }>
			<div className={ styles.sidebar__container }>
				<SearchIcon
					onMouseEnter={ () => setIsSearchHovered(true) }
					onMouseLeave={ () => setIsSearchHovered(false) }
					isSearchHovered={ isSearchHovered }
				/>
				<div className={ styles.sidebar__icons }>
					<FilterIcon
						onMouseEnter={ () => setIsFilterHovered(true) }
						onMouseLeave={ () => setIsFilterHovered(false) }
						isFilterHovered={ isFilterHovered }
					/>
					<PlusIcon
						onMouseEnter={ () => setIsPlusHovered(true) }
						onMouseLeave={ () => setIsPlusHovered(false) }
						isPlusHovered={ isPlusHovered }
					/>
				</div>
			</div>

			<div className={ styles.sidebar__toolbar }>

				<div className={ styles.sidebar__subcontainer }>

					<div className={ styles.sidebar__checkbox }>
						<input type="checkbox" checked={ selectAll } onChange={ handleSelectAll } id="selectAll" />
						<label htmlFor="selectAll" className={ styles.sidebar__label }>Все</label>

						<div className={ styles.selectedFriendsCounter }>
							{ selectedFriendIds.length }
						</div>

					</div>

				</div>
				<div>
					{ !showActions ? (
						<button className={ styles.sidebar__btn } onClick={ handleSelectClick }>
							Выбрать
						</button>
					) : (
						<>
							<button className={ styles.sidebar__actionbtn } onClick={ () => {} }>
								Действия
							</button>
							<button className={ styles.sidebar__btn } onClick={ handleCancelClick }>
								Отменить
							</button>
						</>
					) }
				</div>
			</div>

			<Friends
				selectedFriendIds={ selectedFriendIds }
				handleFriendClick={ handleFriendClick }
				showCheckboxes={ showCheckboxes }
			/>
		</div>
	);
};

