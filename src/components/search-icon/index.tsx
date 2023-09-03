import { Search } from '../icons/ui/icons';
import searchHovered from '../../assets/search.svg'

export const SearchIcon = ({ isSearchHovered, onMouseEnter, onMouseLeave }: {
	isSearchHovered: boolean,
	onMouseEnter: () => void,
	onMouseLeave: () => void
}) => {
	return (
		<div>
			{ isSearchHovered ? (
				<div
					onMouseEnter={ onMouseEnter }
					onMouseLeave={ onMouseLeave }
				>
					<img src={ searchHovered } alt={ 'search' } />
				</div>
			) : (
				<div
					onMouseEnter={ onMouseEnter }
					onMouseLeave={ onMouseLeave }
				>
					<Search />
				</div>
			) }
		</div>
	);
};
