import React from 'react';
import styles from './sidebar-toolbar.module.scss';


export const SidebarToolbar = ({
																 showSelectAllCheckbox,
																 selectAll,
																 handleSelectAll,
																 selectedFriendIds,
																 showActions,
																 handleSelectClick,
																 handleCancelClick,
																 showCheckboxes,
															 }: {
	showSelectAllCheckbox: boolean;
	selectAll: boolean;
	handleSelectAll: () => void;
	selectedFriendIds: number[];
	showActions: boolean;
	handleSelectClick: () => void;
	handleCancelClick: () => void;
	showCheckboxes: boolean;

}) => {


	return (

		<div className={ styles.sidebar__toolbar }>
			<div className={ styles.sidebar__subcontainer }>
				{ showSelectAllCheckbox && (
					<div className={ styles.sidebar__checkbox }>
						<input
							type="checkbox"
							checked={ selectAll }
							onChange={ handleSelectAll }
							id="selectAll"
						/>
						<label htmlFor="selectAll" className={ styles.sidebar__label }>
							Все
						</label>

						<div className={ styles.sidebar__selectedFriendsCounter }>
							{ selectedFriendIds.length }
						</div>
					</div>
				) }
			</div>
			<div>
				{ !showActions && !showCheckboxes ? (
					<div className={ styles.sidebar__counterContainer }>
						<div className={ styles.sidebar__defaultFriendsCounter }>
							213
						</div>
						<button className={ styles.sidebar__btn } onClick={ handleSelectClick }>
							Выбрать
						</button>
					</div>

				) : (
					<>
						<button className={ styles.sidebar__actionBtn } onClick={ () => {} }>
							Действия
						</button>
						<button
							className={ styles.sidebar__btn }
							onClick={ handleCancelClick }
						>
							Отменить
						</button>
					</>
				) }
			</div>
		</div>
	);
};
