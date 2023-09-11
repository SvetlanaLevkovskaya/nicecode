import React, { useState } from 'react';
import styles from './sidebar.module.scss';
import { Friends } from '../../friends';
import { friendsData } from '../../../data/friends';
import { SidebarToolbar } from '../../sidebar-toolbar';
import searchInput from '../../../assets/search-input.svg'
import close from '../../../assets/close.svg'
import closeHover from '../../../assets/closehover.svg'
import { Filter, Plus, Search } from '../../icons/ui/icons';


export const Sidebar = () => {
	const [selectAll, setSelectAll] = useState(false);
	const [selectedFriendIds, setSelectedFriendIds] = useState([]);
	const [showActions, setShowActions] = useState(false);
	const [showCheckboxes, setShowCheckboxes] = useState(false);
	const [showSelectAllCheckbox, setShowSelectAllCheckbox] = useState(false);

	const [isSearchClicked, setIsSearchClicked] = useState(false);
	const [isCloseHovered, setIsCloseHovered] = useState(false);

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

	const handleSearchClick = () => {
		setIsSearchClicked(true);
	};

	const handleCloseClick = () => {
		setIsSearchClicked(false);
	};

	const handleCloseHover = () => {
		setIsCloseHovered(true);
	};

	const handleCloseLeave = () => {
		setIsCloseHovered(false);
	};


	return (
		<div className={ styles.sidebar }>
			<div className={ styles.sidebar__container }>

				{ isSearchClicked && (
					<>
						<img src={ searchInput } alt={ 'searchInput' } />
						<img
							src={isCloseHovered ? closeHover : close}
							alt={'close'}
							onClick={handleCloseClick}
							onMouseEnter={handleCloseHover}
							onMouseLeave={handleCloseLeave}

						/>
					</>

				) }

				<div className={ styles.sidebar__searchIcon }>
					<Search onClick={ handleSearchClick } />
				</div>

				<div className={ styles.sidebar__icons }>
					<Filter />
					<Plus />
				</div>
			</div>

			<SidebarToolbar
				showSelectAllCheckbox={ showSelectAllCheckbox }
				selectAll={ selectAll }
				selectedFriendIds={ selectedFriendIds }
				showActions={ showActions }
				showCheckboxes={ showCheckboxes }
				handleSelectAll={ handleSelectAll }
				handleCancelClick={ handleCancelClick }
				handleSelectClick={ handleSelectClick }
			/>

			<Friends
				selectedFriendIds={ selectedFriendIds }
				showCheckboxes={ showCheckboxes }
				handleCheckboxChange={ handleCheckboxChange }
			/>
		</div>
	);
};

