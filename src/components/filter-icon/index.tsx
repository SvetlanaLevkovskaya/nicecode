import { Filter } from '../icons/ui/icons';
import filterHovered from '../../assets/filter.svg'

export const FilterIcon = ({ isFilterHovered, onMouseEnter, onMouseLeave }: {
	isFilterHovered: boolean,
	onMouseEnter: () => void,
	onMouseLeave: () => void
}) => {
	return (
		<div>
			{ isFilterHovered ? (
				<div
					onMouseEnter={ onMouseEnter }
					onMouseLeave={ onMouseLeave }
				>
					<img src={ filterHovered } alt={ 'search' } />
				</div>
			) : (
				<div
					onMouseEnter={ onMouseEnter }
					onMouseLeave={ onMouseLeave }
				>
					<Filter />
				</div>
			) }
		</div>
	);
};
