import { Search } from '../icons/ui/icons';
import searchHovered from '../../assets/search.svg'

export const SearchIcon = ({ isSearchHovered, onMouseEnter, onMouseLeave, onClick }: {
	isSearchHovered: boolean,
	onMouseEnter: () => void,
	onMouseLeave: () => void,
	onClick: () => void
}) => {
	return (
		<div>
			{ isSearchHovered ? (
				<div
					onMouseEnter={ onMouseEnter }
					onMouseLeave={ onMouseLeave }
					onClick={onClick}
				>
					<img src={ searchHovered } alt={ 'search' } />
				</div>
			) : (
				<div
					onMouseEnter={ onMouseEnter }
					onMouseLeave={ onMouseLeave }
					onClick={onClick}
				>
					<Search />
				</div>
			) }
		</div>
	);
};
