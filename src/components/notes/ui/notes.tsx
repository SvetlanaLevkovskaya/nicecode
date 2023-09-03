import React from 'react';
import styles from './notes.module.scss';
import map from '../../../assets/map.svg';
import { Dropdown } from '../../icons/ui/icons';

export const Notes = () => {
	const paragraphs = [
		{
			date: '20.12.2019',
			content:
				'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, ' +
				'повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных ' +
				'посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.'
		},
		{
			date: '20.12.2019',
			content:
				'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, ' +
				'костной ткани, связках и сухожилиях.'
		}
	];

	return (
		<div className={styles.notes__container}>
			<div className={styles.notes__leftContainer}>
				{paragraphs.map((paragraph, index) => (
					<p key={index}>
						<span>{paragraph.date}</span>
						{paragraph.content}
					</p>
				))}
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
