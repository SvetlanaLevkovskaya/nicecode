import { Dropdown } from '../icons/ui/icons';
import dropdownClicked from '../../assets/dropdown.svg'

export const DropdownIcon = ({ isDropdownClicked, onClick }: {
	isDropdownClicked: boolean,
	onClick: () => void,
}) => {
	return (
		<div>
			{ isDropdownClicked ? (
				<div
					onClick={ onClick }
				>
					<img src={ dropdownClicked } alt={ 'dropdownClicked' } />
				</div>
			) : (
				<div
					onClick={ onClick }
				>
					<Dropdown />
				</div>
			) }
		</div>
	);
};
