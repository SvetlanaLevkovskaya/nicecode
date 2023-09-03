import React from 'react';
import map from '../../../assets/map.svg'
import { Dropdown } from '../../icons/ui/icons';
import styles from './notes.module.scss'

export const Notes = () => {
	return (
		<div className={styles.notes__container}>
			<div className={styles.notes__leftContainer}>

				<p>
					<span>20.12.2019</span>
					Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность,
					повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных
					посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.
				</p>
				<p>
					<span>20.12.2019</span>
					Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах,
					костной ткани, связках и сухожилиях.
				</p>
				<div className={styles.imageContainer}>
					<img src={map} alt="map" width="199px" height="134px" />
				</div>
			</div>
			<div className={styles.notes__rightContainer}>
				<Dropdown />
			</div>
		</div>

	);
};

