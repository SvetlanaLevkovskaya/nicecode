import React, { useState } from 'react';
import styles from './navbar.module.scss';
import { Filter, Plus, Search } from '../../icons/ui/icons';
import { Friends } from '../../friends';
import { friendsData } from '../../../data/friends';


export const Navbar = () => {
	const [selectAll, setSelectAll] = useState(false);
	const [selectedFriendIds, setSelectedFriendIds] = useState([]);
	const [showActions, setShowActions] = useState(false);
	const [showCheckboxes, setShowCheckboxes] = useState(false);

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

	const handleActionsClick = () => {
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
		<div className={ styles.navbar }>
			<div className={ styles.navbar__container }>
				<Search />
				<div className={ styles.navbar__icons }>
					<Filter />
					<Plus />
				</div>
			</div>

			<div className={ styles.navbar__toolbar }>

				<div className={ styles.navbar__subcontainer }>

					<div className={ styles.navbar__checkbox }>
						<input type="checkbox" checked={ selectAll } onChange={ handleSelectAll } id="selectAll" />
						<label htmlFor="selectAll" className={ styles.navbar__label }>Все</label>

						<div className={ styles.selectedFriendsCounter }>
							{ selectedFriendIds.length }
						</div>

					</div>

				</div>
				<div>
					{ !showActions ? (
						<button className={ styles.navbar__btn } onClick={ handleActionsClick }>
							Выбрать
						</button>
					) : (
						<>
							<button className={ styles.navbar__actionbtn } onClick={ handleActionsClick }>
								Действия
							</button>
							<button className={ styles.navbar__btn } onClick={ handleCancelClick }>
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


/*
 return (
 <>
 { friendsData.map((friend) => (
 <div
 key={ friend.id }
 className={ `${ styles.friends__container } ${
 selectedFriendIds.includes(friend.id) ? styles.friends__container_selected : ''
 }` }
 onClick={ () => handleFriendClick(friend.id) }
 >
 { showCheckboxes && (
 <div className={ styles.friends__checkbox }>
 <input
 type="checkbox"
 checked={ selectedFriendIds.includes(friend.id) }
 onChange={ () => handleFriendClick(friend.id) }
 id={ `checkbox-${ friend.id }` }
 />
 <label htmlFor={ `checkbox-${ friend.id }` } className={ styles.friends__label }></label>
 </div>
 ) }
 <img src={ friend.src } alt="friend" />
 <div className={ styles.friends__name }>{ friend.name }</div>
 { friend.id === 1 && (
 <img src={ telegram } alt="telegramIcon" className={ styles.friends__icon } />
 ) }
 { friend.id === 3 && (
 <img src={ mod } alt="modIcon" className={ styles.friends__icon } />
 ) }
 </div>
 )) }
 </>
 );
 };
 */
