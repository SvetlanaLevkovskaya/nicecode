import { Plus } from '../icons/ui/icons';
import plusHovered from '../../assets/add.svg'

export const PlusIcon = ({ isPlusHovered, onMouseEnter, onMouseLeave }: {
	isPlusHovered: boolean,
	onMouseEnter: () => void,
	onMouseLeave: () => void
}) => {
	return (
		<div>
			{ isPlusHovered ? (
				<div
					onMouseEnter={ onMouseEnter }
					onMouseLeave={ onMouseLeave }
				>
					<img src={ plusHovered } alt={ 'search' } />
				</div>
			) : (
				<div
					onMouseEnter={ onMouseEnter }
					onMouseLeave={ onMouseLeave }
				>
					<Plus />
				</div>
			) }
		</div>
	);
};
